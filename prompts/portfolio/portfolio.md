# Personal portfolio (one-page site)

A clean, one-page personal site — hero, about, experience, projects, skills, testimonials, and contact — all driven by a single content file so text edits stay easy. A great first build: you go from template to a site that's actually *about you* in one prompt, then refine it section by section. **Difficulty: medium.** Works from either template.

**How to use:** paste everything in *The prompt* box into Claude Code, accept the change, check the preview. Then use the *Iterate* prompts one at a time.

## The prompt

```
Build a one-page personal portfolio as the main page of my site.

Constraints:
- Keep all editable text in a single content.ts file, and have the page and its
  sections read from it — so I can change wording later without touching layout.
- Break the page into one component per section under components/, and compose
  them in order in app/page.tsx.
- Style everything with Tailwind CSS classes (already set up in this project).
  Use the named colors from tailwind.config.ts (accent, ink, paper) — no hardcoded hex.
- No backend, no database, no new npm packages.

The page, top to bottom:
- Hero: my name, role, location, a one-line headline, and two buttons
  ("See my work" jumps to projects, "Get in touch" jumps to contact).
- About: two or three short paragraphs.
- Experience: a list of roles, each with title, company, period, and a one-line summary.
- Selected work: a few projects, each with title, year, a short summary, and a link.
- Skills: a few labeled groups, each a set of small chips.
- Testimonials: two short pull quotes with an author and their role.
- Contact: a line of intro text, my email, and a row of social links.

Design:
- Clean, calm, and readable, with generous spacing and clear section headings.
- Smooth scrolling to sections when the hero buttons are clicked.
- Looks good on a phone screen too.

Fill it in with me as "Nakul, an engineer" and invent tasteful placeholder details
I can correct later.

When you're done, tell me in one sentence what you changed, and remind me to check the preview.
```

## Then iterate (one at a time)

- "Change my headline to [your new one-liner]."
- "Add a short intro sentence under my name in the hero."
- "Reorder the sections so Projects comes right after About."
- "Add a 'Services' section with three things I offer."
- "Make the accent color [say a color]."
- "Use a bolder heading font."
- "Remove the testimonials section for now."

## Notes

- All the wording lives in `content.ts` — edit there for any text change; edit files in `components/` only to change how a section *looks*.
- This is the site this repo ships with, so you can also just tweak the existing `content.ts` instead of rebuilding from scratch.
