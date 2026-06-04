#!/usr/bin/env bash
# Deploy portfolio to GitHub Pages (Option A)
set -euo pipefail

REPO="Sai99897/Sai-Prasanth-Parnambedu.github.io"
SITE_URL="https://sai99897.github.io/Sai-Prasanth-Parnambedu.github.io/"

cd "$(dirname "$0")"

echo "→ Checking GitHub SSH access..."
# GitHub SSH always exits 1 even when auth succeeds — capture output, ignore exit code
ssh_out="$(ssh -T git@github.com 2>&1)" || true
if ! echo "$ssh_out" | grep -qiE 'successfully authenticated|Hi [A-Za-z0-9_-]+'; then
  echo ""
  echo "GitHub SSH is not set up for this machine."
  echo "Response: $ssh_out"
  echo ""
  echo "1. Add your public key to GitHub: https://github.com/settings/keys"
  echo "   Key file: ~/.ssh/id_ed25519.pub"
  echo "2. Or use HTTPS: git remote set-url origin https://github.com/${REPO}.git"
  echo "   Then run: git push -u origin main --force"
  exit 1
fi
echo "  Authenticated as $(echo "$ssh_out" | grep -oiE 'Hi [^!]+' | head -1 | sed 's/Hi //')"

if ! git remote get-url origin &>/dev/null; then
  git remote add origin "git@github.com:${REPO}.git"
fi

git branch -M main
echo "→ Pushing to ${REPO} (replaces old site content)..."
git push -u origin main --force

echo ""
echo "✓ Push complete."
echo "  Live site (1–3 min): ${SITE_URL}"
echo ""
echo "If the site does not load, enable Pages:"
echo "  https://github.com/${REPO}/settings/pages"
echo "  Branch: main · Folder: / (root)"
echo ""
echo "Add this URL to LinkedIn, GitHub profile, and your CV."
