const GITHUB = "https://github.com/Sai99897";
const CONTACT_EMAIL = "saiprasanthparnu@gmail.com";

const PROJECTS = [
  {
    title: "Smart Inspection Cell",
    slug: "Integration-and-Comparison-of-vision-models-for-smart-inspection-cell",
    description:
      "YOLOv8 and MobileNetV2 trained on synthetic data, integrated into a RoboDK-simulated cell. Benchmarked inference latency and productivity for automotive defect detection.",
    lang: "YOLOv8 · MobileNetV2 · RoboDK",
    media: {
      imagesLabel: "RoboDK simulation",
      images: [
        {
          src: "assets/smart-inspection-cell/robodk-inspection-cell.png",
          alt: "RoboDK smart inspection cell simulation with Fanuc robot and vision-based defect detection",
        },
      ],
    },
  },
  {
    title: "Wind Turbine Health Monitor",
    slug: "Structural-Health-Monitoring-of-Wind-turbine",
    description:
      "End-to-end ML pipeline for predictive maintenance with rolling variance and Isolation Forest (F1 > 0.85). Led a team of 5 for a university tech seminar.",
    lang: "Jupyter Notebook · WeDoWind",
  },
  {
    title: "Force-Controlled Mobile Manipulator",
    description:
      "Master thesis digital twin in Gazebo: autonomous navigation and force-controlled manipulation across 100+ trials (>95% navigation success).",
    lang: "Gazebo · ROS · Force Control",
    footerNote: "Master thesis · Fraunhofer IPA",
    featured: true,
    media: {
      videos: [
        {
          src: "assets/Force-Controlled_Mobile_Manipulator/mobile_robot_manipulation.mp4",
          label: "Manipulation demo",
        },
        {
          src: "assets/Force-Controlled_Mobile_Manipulator/mobile_robot_navigation.mp4",
          label: "Navigation demo",
        },
      ],
      images: [
        {
          src: "assets/Force-Controlled_Mobile_Manipulator/gripper_approach.png",
          alt: "Gripper approach during force-controlled manipulation",
        },
        {
          src: "assets/Force-Controlled_Mobile_Manipulator/gripper_reaction_forces.png",
          alt: "Gripper reaction forces visualization",
        },
      ],
    },
  },
  {
    title: "Tiago Robot Project",
    slug: "navigation-and-manipulation-with-tiago_robot",
    description:
      "Open-source ROS/MoveIt project with autonomous manipulation on the TIAGo mobile platform.",
    lang: "ROS · MoveIt · Python",
    media: {
      videos: [
        {
          src: "assets/tiago_nav.mp4",
          label: "Working demo — navigation",
        },
      ],
    },
  },
  {
    title: "Dual-Arm Teleoperation (ROS2)",
    slug: "dual-arm-teleoperation",
    description:
      "ROS2 Humble workspace for dual 6-DOF arms with two-finger grippers — MediaPipe hand tracking from a webcam drives IK and RViz2 visualization.",
    lang: "ROS2 · MediaPipe · Python",
    media: {
      youtube: {
        url: "https://youtu.be/iNj_mWYliRo",
        poster: "assets/dual-arm-teleoperation/demo-poster.png",
        label: "Watch demo on YouTube",
        alt: "Dual-arm teleoperation demo — hand gesture control in RViz2",
      },
    },
  },
  {
    title: "Trajectory Validation Pipeline",
    description:
      "Automated trajectory validation with rosbag replay and FastDTW, integrated into GitLab CI/CD at Fraunhofer IPA (−25% regression errors).",
    lang: "Python · GitLab CI/CD · rosbag",
    footerNote: "Working student · Fraunhofer IPA",
  },
  {
    title: "Sentiment Analysis Project",
    slug: "sentiment-analysis-for-mental-health",
    description:
      "Classical ML and deep learning comparison for text sentiment classification, with full project documentation.",
    lang: "scikit-learn · TensorFlow · NLP",
    media: {
      report: {
        src: "assets/Sentiment_analysis/Sentiment_analysis_Project_report.pdf",
        label: "Download project report (PDF)",
      },
    },
  },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderProjectMedia(media) {
  if (!media) return "";

  let html = '<div class="project-card__media">';

  if (media.youtube) {
    const yt = media.youtube;
    html += `
      <div class="project-media__group">
        <p class="project-media__label">Demo video</p>
        <a class="project-media__youtube" href="${escapeHtml(yt.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(yt.label)}">
          <img class="project-media__youtube-poster" src="${escapeHtml(yt.poster)}" alt="${escapeHtml(yt.alt || yt.label)}" loading="lazy" />
          <span class="project-media__youtube-play" aria-hidden="true">
            <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74a8.2 8.2 0 00-5.78-5.82C55.3.98 34 1 34 1S12.7.98 7.26 1.92A8.2 8.2 0 001.48 7.74C.54 13.18.54 24 .54 24s0 10.82.94 16.26a8.2 8.2 0 005.78 5.82C12.7 47.02 34 47 34 47s20.3.02 25.74-.96a8.2 8.2 0 005.78-5.82c.94-5.44.94-16.26.94-16.26s0-10.82-.94-16.26z" fill="#f00"/><path d="M45 24L27 14v20" fill="#fff"/></svg>
          </span>
          <span class="project-media__youtube-cta">${escapeHtml(yt.label)}</span>
        </a>
      </div>
    `;
  }

  if (media.videos?.length) {
    html += '<div class="project-media__group">';
    html += '<p class="project-media__label">Demo videos</p>';
    html += '<div class="project-media__videos">';
    media.videos.forEach((v) => {
      html += `
        <figure class="project-media__video-wrap">
          ${v.label ? `<figcaption>${escapeHtml(v.label)}</figcaption>` : ""}
          <video class="project-media__video" controls preload="metadata" playsinline>
            <source src="${escapeHtml(v.src)}" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </figure>
      `;
    });
    html += "</div></div>";
  }

  if (media.images?.length) {
    html += '<div class="project-media__group">';
    html += `<p class="project-media__label">${escapeHtml(media.imagesLabel || "Screenshots")}</p>`;
    html += '<div class="project-media__images">';
    media.images.forEach((img) => {
      html += `
        <img class="project-media__image" src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" loading="lazy" />
      `;
    });
    html += "</div></div>";
  }

  if (media.report) {
    html += `
      <div class="project-media__group">
        <p class="project-media__label">Project report</p>
        <a class="project-media__report btn btn--outline" href="${escapeHtml(media.report.src)}" target="_blank" rel="noopener noreferrer" download>
          ↓ ${escapeHtml(media.report.label)}
        </a>
      </div>
    `;
  }

  html += "</div>";
  return html;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => {
    const repoUrl = p.slug ? `${GITHUB}/${p.slug}` : null;
    const titleHtml = repoUrl
      ? `<a href="${repoUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>`
      : escapeHtml(p.title);

    const footerNote = p.footerNote || (p.slug ? null : "Fraunhofer IPA");
    const footerLink = repoUrl
      ? `<a href="${repoUrl}" target="_blank" rel="noopener noreferrer">View repo →</a>`
      : `<span>${escapeHtml(footerNote)}</span>`;

    const featuredClass = p.featured || p.media ? " project-card--featured" : "";

    return `
      <article class="project-card${featuredClass}">
        <span class="project-card__index">${String(i + 1).padStart(2, "0")}</span>
        <span class="project-card__lang">${escapeHtml(p.lang)}</span>
        <h3 class="project-card__title">${titleHtml}</h3>
        <p class="project-card__desc">${escapeHtml(p.description)}</p>
        ${renderProjectMedia(p.media)}
        <div class="project-card__footer">
          <span>${repoUrl ? "GitHub" : "Portfolio demo"}</span>
          ${footerLink}
        </div>
      </article>
    `;
  }).join("");
}

function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("open", !open);
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__links a");

  window.addEventListener(
    "scroll",
    () => {
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${current}`
        );
      });
    },
    { passive: true }
  );
}

function setupTimelineAnimation() {
  const items = document.querySelectorAll(".timeline__item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function setupHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      header.style.boxShadow =
        window.scrollY > 24 ? "0 4px 24px rgba(0,0,0,0.35)" : "none";
    },
    { passive: true }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNav();
  setupContactForm();
  setupHeader();
  setupScrollSpy();
  setupTimelineAnimation();
});
