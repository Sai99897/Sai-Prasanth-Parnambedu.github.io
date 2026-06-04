#!/usr/bin/env bash
# Deploy portfolio to GitHub Pages (Option A)
set -euo pipefail

REPO="Sai99897/Sai-Prasanth-Parnambedu.github.io"
SITE_URL="https://sai99897.github.io/Sai-Prasanth-Parnambedu.github.io/"

cd "$(dirname "$0")"

echo "→ Checking GitHub SSH access..."
ssh_out="$(ssh -T git@github.com 2>&1)" || true
if ! echo "$ssh_out" | grep -qiE 'successfully authenticated|Hi [A-Za-z0-9_-]+'; then
  echo ""
  echo "GitHub SSH is not set up for this machine."
  echo "Response: $ssh_out"
  exit 1
fi
echo "  Authenticated as $(echo "$ssh_out" | grep -oiE 'Hi [^!]+' | head -1 | sed 's/Hi //')"

if ! git remote get-url origin &>/dev/null; then
  git remote add origin "git@github.com:${REPO}.git"
fi

git branch -M main
echo "→ Pushing to ${REPO}..."
git push -u origin main

echo ""
echo "✓ Push complete."
echo ""
echo "Enable GitHub Pages (one-time, in browser):"
echo "  https://github.com/${REPO}/settings/pages"
echo ""
echo "  1. Repo must be PUBLIC (Settings → Danger Zone → Change visibility)"
echo "  2. Build and deployment → Source:"
echo "       Deploy from a branch  (NOT GitHub Actions)"
echo "  3. Branch: main   Folder: / (root)   → Save"
echo ""
echo "  Wait 2–5 minutes, then open:"
echo "  ${SITE_URL}"
echo ""
echo "If Actions workflows fail, ignore them — this site uses branch deploy only."
