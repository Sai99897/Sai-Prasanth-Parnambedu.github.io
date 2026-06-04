# Sai Prasanth Parnambedu — Personal Portfolio

Single-page portfolio for robotics, AI integration, and industrial automation — built from CV and GitHub profile.

## Preview locally

```bash
cd /home/sai.p/portfolio
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy to GitHub Pages

**Use branch deploy (not GitHub Actions).** This is a static site — no build step needed.

1. Push: `./deploy.sh`
2. **Public repo:** [Settings → Danger Zone → Public](https://github.com/Sai99897/Sai-Prasanth-Parnambedu.github.io/settings)
3. **Enable Pages:** [Settings → Pages](https://github.com/Sai99897/Sai-Prasanth-Parnambedu.github.io/settings/pages)
   - Source: **Deploy from a branch**
   - Branch: **main** · Folder: **/ (root)**
   - Save
4. Live URL (after ~2–5 min): https://sai99897.github.io/Sai-Prasanth-Parnambedu.github.io/

Do **not** select "GitHub Actions" as the Pages source unless you add a workflow back.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Sections: hero, about, experience, education, projects, skills, research, contact |
| `styles.css` | Dark robotics-themed layout |
| `script.js` | Projects grid, mobile nav, contact form (opens mail client) |
| `assets/Sai_Prasanth_Parnambedu_CV.pdf` | Downloadable CV |
| `assets/Force-Controlled_Mobile_Manipulator/` | Thesis demo videos & screenshots |
| `assets/tiago_nav.mp4` | TIAGo navigation demo |
| `assets/Sentiment_analysis/` | Sentiment analysis project report PDF |
| `assets/smart-inspection-cell/robodk-inspection-cell.png` | RoboDK inspection cell (from repo README) |
| `assets/logos/` | Company logos for experience section (NEURA, Fraunhofer, Pennar, freelance icon) |
| `assets/dual-arm-teleoperation/demo-poster.png` | Poster for dual-arm project (links to [YouTube demo](https://youtu.be/iNj_mWYliRo)) |

## Customize

- Add your email in `index.html` / contact form `mailto` target in `script.js`.
- Edit `PROJECTS` in `script.js` to feature other repos.
- Replace `assets/Sai_Prasanth_Parnambedu_CV.pdf` when your CV updates.
