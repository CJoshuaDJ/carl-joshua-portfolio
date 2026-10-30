"""Generate Carl Joshua De Jesus resume PDF."""
from pathlib import Path

from fpdf import FPDF

OUT = Path(__file__).resolve().parents[1] / "public" / "resume.pdf"
DESKTOP_OUT = Path.home() / "Desktop" / "NEW software Engineer" / "De Jesus, Carl Joshua Resume.pdf"

# Windows fonts
FONT_REG = r"C:\Windows\Fonts\arial.ttf"
FONT_BOLD = r"C:\Windows\Fonts\arialbd.ttf"


class Resume(FPDF):
    def __init__(self):
        super().__init__(unit="in", format="Letter")
        self.set_auto_page_break(auto=True, margin=0.45)
        self.set_margins(0.55, 0.45, 0.55)
        self.add_font("Body", "", FONT_REG)
        self.add_font("Body", "B", FONT_BOLD)

    def section(self, title: str):
        self.ln(0.12)
        self.set_font("Body", "B", 10.5)
        self.set_text_color(20, 20, 20)
        self.cell(0, 0.22, title.upper(), new_x="LMARGIN", new_y="NEXT")
        self.set_draw_color(40, 40, 40)
        y = self.get_y()
        self.line(self.l_margin, y, self.w - self.r_margin, y)
        self.ln(0.08)

    def bullet(self, text: str):
        self.set_font("Body", "", 9)
        self.set_text_color(30, 30, 30)
        x = self.l_margin
        self.set_x(x)
        self.multi_cell(0, 0.155, f"•  {text}", new_x="LMARGIN", new_y="NEXT")


def build():
    pdf = Resume()
    pdf.add_page()

    # Header
    pdf.set_font("Body", "B", 16)
    pdf.set_text_color(15, 15, 15)
    pdf.cell(0, 0.28, "CARL JOSHUA DE JESUS", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Body", "B", 11)
    pdf.cell(0, 0.2, "Junior Software Engineer", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Body", "", 8.5)
    pdf.set_text_color(40, 40, 40)
    contact = (
        "09953487688  |  cjoshuadejesus27@gmail.com  |  "
        "linkedin.com/in/carl-joshua-de-jesus-96b89733b"
    )
    pdf.cell(0, 0.16, contact, align="C", new_x="LMARGIN", new_y="NEXT")
    links = (
        "Portfolio: carl-joshua-portfolio-ten.vercel.app  |  "
        "GitHub: github.com/CJoshuaDJ"
    )
    pdf.cell(0, 0.16, links, align="C", new_x="LMARGIN", new_y="NEXT")

    # Summary
    pdf.section("Summary")
    pdf.set_font("Body", "", 9)
    summary = (
        "Junior software engineer with production experience building responsive web applications "
        "using React and TypeScript. Comfortable with API integration, SQL fundamentals, Git/GitHub "
        "workflows, CI/CD, and QA-minded testing. Shipped personal projects with live demos and "
        "public source. Seeking junior software or application developer roles."
    )
    pdf.multi_cell(0, 0.155, summary, new_x="LMARGIN", new_y="NEXT")

    # Skills
    pdf.section("Technical Skills")
    pdf.set_font("Body", "", 9)
    skills = [
        (
            "Languages:",
            "JavaScript, TypeScript, C#, Python, Java, C++, HTML, CSS, SQL",
        ),
        (
            "Frontend:",
            "React, Tailwind CSS, Responsive Design, Component-Based UI",
        ),
        (
            "Backend & Data:",
            "Node.js, REST APIs, JSON, SQL, Supabase",
        ),
        (
            "Tools & Delivery:",
            "Git, GitHub, Pull Requests, Code Review, GitHub Actions (CI/CD), Vercel, Software Testing / Manual QA",
        ),
    ]
    for label, value in skills:
        pdf.set_font("Body", "B", 9)
        pdf.write(0.155, label + " ")
        pdf.set_font("Body", "", 9)
        pdf.write(0.155, value)
        pdf.ln(0.17)

    # Experience
    pdf.section("Professional Experience")

    pdf.set_font("Body", "B", 9.5)
    pdf.cell(0, 0.17, "Junior Software Engineer  —  Lightreach (Contractual)", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Body", "", 8.5)
    pdf.set_text_color(70, 70, 70)
    pdf.cell(0, 0.14, "October 2025 – April 2026", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(30, 30, 30)
    for b in [
        "Developed and maintained responsive web interfaces across client projects (including NetRanks, SetMaker, and Lightreach Compress) using React, TypeScript, and Tailwind CSS.",
        "Served as the sole frontend developer for Lightreach Compress — delivered UI from layout through interactions and tested against mock backend APIs.",
        "On SetMaker: revamped frontend UI and contributed to backend integrations for payments, subscriptions, and billing workflows.",
        "Refactored legacy frontend code to improve maintainability; collaborated through Git branching, pull requests, and code reviews.",
        "Implemented and maintained GitHub Actions (YAML) workflows for CI/CD, including automated testing, staging, and production deployments.",
    ]:
        pdf.bullet(b)

    pdf.ln(0.04)
    pdf.set_font("Body", "B", 9.5)
    pdf.cell(0, 0.17, "IT Intern / Manual Software QA Tester  —  Go Negosyo", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Body", "", 8.5)
    pdf.set_text_color(70, 70, 70)
    pdf.cell(0, 0.14, "Internship", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(30, 30, 30)
    for b in [
        "Performed manual software QA testing to validate application behavior before release.",
        "Identified issues and communicated findings clearly to support a stronger quality process.",
        "Supported IT operations and day-to-day technical workflows during the internship.",
    ]:
        pdf.bullet(b)

    # Projects
    pdf.section("Projects")

    projects = [
        (
            "JobTrack — Job Application Tracker",
            "Solo-built React/TypeScript app for tracking applications, statuses, notes, search/filters, and dashboard stats with localStorage. Live: job-application-tracker-bay-psi.vercel.app  |  github.com/CJoshuaDJ/job-application-tracker",
        ),
        (
            "BugBoard — QA Bug Tracker",
            "Solo-built React/TypeScript kanban for reporting and triaging bugs (severity, repro steps, drag-and-drop status moves, filters). Live: qa-bug-board.vercel.app  |  github.com/CJoshuaDJ/qa-bug-board",
        ),
        (
            "Personal Portfolio",
            "React/TypeScript portfolio with responsive layout, light/dark theme, and project demos. Live: carl-joshua-portfolio-ten.vercel.app  |  github.com/CJoshuaDJ/carl-joshua-portfolio",
        ),
    ]
    for title, desc in projects:
        pdf.set_font("Body", "B", 9)
        pdf.cell(0, 0.155, title, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Body", "", 8.5)
        pdf.multi_cell(0, 0.145, desc, new_x="LMARGIN", new_y="NEXT")
        pdf.ln(0.03)

    # Education
    pdf.section("Education")
    pdf.set_font("Body", "B", 9.5)
    pdf.cell(0, 0.17, "Bachelor of Science in Information Technology", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Body", "", 9)
    pdf.cell(
        0,
        0.15,
        "Specialization: Web & Mobile Application Development",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.cell(
        0,
        0.15,
        "Far Eastern University – Institute of Technology  |  September 2021 – November 2025",
        new_x="LMARGIN",
        new_y="NEXT",
    )
    pdf.set_font("Body", "", 8.5)
    pdf.cell(0, 0.145, "Capstone Project — Project Manager", new_x="LMARGIN", new_y="NEXT")
    pdf.cell(
        0,
        0.145,
        "Alliance of Information Technology Students — Director for Publication",
        new_x="LMARGIN",
        new_y="NEXT",
    )

    # Certifications
    pdf.section("Certifications")
    pdf.set_font("Body", "", 9)
    certs = [
        "IT Specialist – Cybersecurity (Certiport) — November 2024",
        "Cisco DevNet Associate — April 2024",
        "Cisco CCNA (Introduction to Networks; Switching, Routing & Wireless Essentials; Enterprise Networking, Security & Automation) — 2023",
        "IT Specialist – Networking (Certiport) — July 2023",
    ]
    for c in certs:
        pdf.multi_cell(0, 0.145, f"•  {c}", new_x="LMARGIN", new_y="NEXT")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Wrote {OUT}")

    try:
        DESKTOP_OUT.parent.mkdir(parents=True, exist_ok=True)
        pdf.output(str(DESKTOP_OUT))
        print(f"Wrote {DESKTOP_OUT}")
    except Exception as e:
        print(f"Desktop copy skipped: {e}")


if __name__ == "__main__":
    build()
