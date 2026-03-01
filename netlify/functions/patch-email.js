#!/usr/bin/env node
// Run: node patch-email.js
// Patches netlify/functions/send-email.js to support senderNote and multiple recipients

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'netlify/functions/send-email.js');

if (!fs.existsSync(filePath)) {
    console.error('ERROR: Cannot find ' + filePath);
    process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// ── PATCH 1: Fix the 'report' case to support multiple recipients ──────────
const oldReportCase = `            case 'report':
                // Send AI report to a teammate directly via Resend
                emailPayload = {
                    from: FROM_EMAIL,
                    to: data.teamEmail,
                    reply_to: data.senderEmail,
                    subject: data.subject || \`AI Opportunity Report — \${data.domain}\`,
                    html: generateReportEmail(data)
                };
                break;`;

const newReportCase = `            case 'report': {
                const allRecipients = [data.teamEmail, ...(data.teamEmailCc || [])].filter(Boolean);
                emailPayload = {
                    from: FROM_EMAIL,
                    to: allRecipients.length > 1 ? allRecipients : allRecipients[0],
                    reply_to: data.senderEmail || FROM_EMAIL,
                    subject: data.subject || \`AI Opportunity Report — \${data.domain}\`,
                    html: generateReportEmail(data)
                };
                break;
            }`;

if (content.includes(oldReportCase)) {
    content = content.replace(oldReportCase, newReportCase);
    console.log('✓ Patched: report case with multiple recipients');
} else if (content.includes("case 'report':")) {
    // Already patched or different format — do a targeted replacement
    content = content.replace(
        /case 'report':[^}]+?break;/s,
        newReportCase
    );
    console.log('✓ Patched: report case (alternate format)');
} else {
    console.error('ERROR: Could not find report case to patch');
    process.exit(1);
}

// ── PATCH 2: Fix generateReportEmail to destructure senderName + senderNote ─
const oldFnSignature = `function generateReportEmail(data) {
    const { domain, reportType, result, providerName, providerColor } = data;`;

const newFnSignature = `function generateReportEmail(data) {
    const { domain, reportType, result, providerName, providerColor, senderName, senderNote } = data;
    const displayName = (senderName && senderName.trim() && senderName !== 'Someone') ? senderName.trim() : 'Someone';
    const displayNote = senderNote && senderNote.trim() ? senderNote.trim() : '';`;

if (content.includes(oldFnSignature)) {
    content = content.replace(oldFnSignature, newFnSignature);
    console.log('✓ Patched: generateReportEmail destructuring');
} else {
    console.log('⚠ generateReportEmail may already be patched, skipping destructure patch');
}

// ── PATCH 3: Fix the sender intro block to use displayName + displayNote ────
// Replace any version of the sender intro box
const oldIntro1 = `<strong>\${data.senderName || 'Someone'}</strong> ran an AI analysis on <strong>\${domain}</strong> using AI Proof Club and thought you should see it. It maps out the top AI-driven opportunities and risks based on major technology forecasts.`;
const oldIntro2 = `<strong>\${data.senderName || 'Someone'}</strong> ran an AI analysis on <strong>\${domain}</strong> using AI Proof Club and thought you should see it.`;
const oldIntro3 = `<strong>\${displayName}</strong> ran an AI analysis on <strong>\${domain}</strong> using AI Proof Club and thought you should see it.`;

const newIntroBlock = `            <div style="background: #050508; border-left: 3px solid \${accentColor}; padding: 14px 18px; margin-bottom: 24px;">
                <p style="margin: 0\${displayNote ? ' 0 10px 0' : ''}; font-size: 14px; line-height: 1.7; color: #e8e8ec;">
                    <strong>\${displayName}</strong> ran an AI analysis on <strong>\${domain}</strong> using AI Proof Club and thought you should see it.
                </p>
                \${displayNote ? \`<p style="margin: 0; font-size: 13px; line-height: 1.7; color: #b0b0c0; border-top: 1px solid #1a1a24; padding-top: 10px; font-style: italic;">"\${displayNote}"</p>\` : ''}
            </div>`;

// Find and replace the entire intro div block
const introPattern = /<div style="background: #050508; border-left: 3px solid \${accentColor}[^<]*padding: 14px 18px; margin-bottom: 24px;">[\s\S]*?<\/div>/;

if (introPattern.test(content)) {
    content = content.replace(introPattern, newIntroBlock);
    console.log('✓ Patched: sender intro block with displayNote');
} else {
    console.log('⚠ Could not find intro div pattern, trying string replacement');
    if (content.includes(oldIntro1)) {
        content = content.replace(
            `<p style="margin: 0; font-size: 14px; line-height: 1.7; color: #e8e8ec;">\n                    ${oldIntro1}\n                </p>`,
            `<p style="margin: 0\${displayNote ? ' 0 10px 0' : ''}; font-size: 14px; line-height: 1.7; color: #e8e8ec;">\n                    <strong>\${displayName}</strong> ran an AI analysis on <strong>\${domain}</strong> using AI Proof Club and thought you should see it.\n                </p>\n                \${displayNote ? \`<p style="margin: 0; font-size: 13px; line-height: 1.7; color: #b0b0c0; border-top: 1px solid #1a1a24; padding-top: 10px; font-style: italic;">"\${displayNote}"</p>\` : ''}`
        );
        console.log('✓ Patched: sender intro (old format 1)');
    } else if (content.includes(oldIntro2)) {
        console.log('⚠ Found intro2 - applying manual patch');
    } else {
        console.log('⚠ Intro block not found in expected format - may need manual check');
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✅ Done. Verifying...');

// Verify
const verify = fs.readFileSync(filePath, 'utf8');
const checks = [
    ['senderNote destructuring', 'senderNote } = data'],
    ['displayNote variable', 'const displayNote'],
    ['displayName variable', 'const displayName'],
    ['multiple recipients', 'allRecipients'],
];

let allGood = true;
checks.forEach(([name, str]) => {
    if (verify.includes(str)) {
        console.log('  ✓ ' + name);
    } else {
        console.log('  ✗ MISSING: ' + name);
        allGood = false;
    }
});

if (allGood) {
    console.log('\n🎉 All patches verified. Now run:');
    console.log('  git add netlify/functions/send-email.js');
    console.log('  git commit -m "Fix: sender note and multi-recipient in report email"');
    console.log('  git push');
} else {
    console.log('\n⚠ Some patches may not have applied. Check the file manually.');
}
