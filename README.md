# DevNextra Website

> **AI, Cloud & Product Engineering Partner**  
> Building secure, scalable and intelligent digital products for startups, growing businesses and enterprises.



## Overview

This repository contains the DevNextra corporate website and its supporting design assets. The website positions DevNextra as a global technology partner specialising in AI-enabled solutions, cloud engineering, modern web and mobile applications, product engineering, and long-term software support.

The experience is designed to help prospective clients quickly understand:

- what DevNextra offers;
- which business problems DevNextra can solve;
- why DevNextra is a credible delivery partner;
- how DevNextra approaches product delivery;
- what results DevNextra has achieved; and
- how to start a project conversation.

## Project Status

**Current phase:** Design and implementation handoff

The Global SaaS homepage concept is the approved visual direction. Before production launch, all placeholder content, logos, testimonials, statistics, contact details, case-study claims and legal information must be replaced with verified DevNextra content.

## Strategic Positioning

DevNextra should be presented as an **AI, Cloud & Product Engineering Partner**, rather than only as a general software-development agency.

### Primary audience

- Startups validating or scaling digital products
- SaaS companies modernising platforms
- SMEs undergoing digital transformation
- Enterprise teams seeking specialist engineering capability
- Healthcare organisations requiring secure and accessible solutions

### Core value proposition

DevNextra combines product thinking, engineering excellence, AI capability and dependable delivery to turn business ideas into secure, scalable digital products.

## Homepage Structure

The homepage follows a conversion-focused narrative:

1. **Navigation** - Gives direct access to services, AI solutions, case studies, industries, company information and consultation booking.
2. **Hero** - Communicates the principal value proposition and presents primary and secondary calls to action.
3. **Trust signals** - Provides verified customer, partner or accreditation logos.
4. **Why DevNextra** - Explains the company's differentiators, including AI-first delivery, security, scalability and global support.
5. **Business metrics** - Shows verified evidence of experience and delivery outcomes.
6. **Services** - Introduces web, mobile, AI, cloud, DevOps, product engineering, maintenance and support capabilities.
7. **Case studies** - Demonstrates measurable client outcomes using approved project evidence.
8. **Technology stack** - Summarises the technologies actively supported by the engineering team.
9. **Delivery process** - Explains discovery, planning, design, development, testing, deployment and support.
10. **FAQ** - Addresses common commercial, delivery, security and engagement questions.
11. **Testimonials** - Provides real, approved customer feedback.
12. **Final CTA** - Encourages qualified visitors to book an initial consultation.
13. **Footer** - Provides navigation, contact details, legal links and social channels.

## Design Direction

### Brand character

- Modern
- Credible
- Clear
- Technical without being complicated
- Enterprise-ready
- Globally relevant
- Approachable and outcome-focused

### Visual system

- **Primary colour:** DevNextra green
- **Supporting colours:** White, light neutral grey and deep navy
- **Typography:** Modern sans-serif with strong heading hierarchy
- **Components:** Spacious cards, subtle borders, restrained shadows and consistent corner radii
- **Imagery:** Product interfaces, cloud infrastructure, AI workflows and authentic project visuals
- **Motion:** Subtle and purposeful, with respect for reduced-motion preferences

## Recommended Repository Structure

```text
.
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── case-studies/
│   │   ├── clients/
│   │   └── homepage/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   ├── content/
│   ├── pages/
│   ├── styles/
│   ├── services/
│   ├── utilities/
│   └── tests/
├── docs/
│   ├── architecture/
│   ├── content/
│   └── design/
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

> Adapt the folder structure to the selected framework. Keep page content separate from presentation components so copy and case studies can be maintained without redesigning the UI.

## Getting Started

The exact commands depend on the framework selected for implementation. Once the application is scaffolded, replace this section with tested, copy-and-paste-ready commands.

### Prerequisites

Document and pin the following before development begins:

- supported runtime and exact version;
- package manager and lock file;
- required environment variables;
- local HTTPS requirements;
- content-management dependencies;
- analytics and consent configuration; and
- deployment access requirements.

### Suggested local workflow

```bash
git clone <repository-url>
cd <repository-folder>
cp .env.example .env.local
<install-command>
<development-command>
```

The local development URL, build command, test command and production-preview command must be added after the implementation stack is confirmed.

## Environment Variables

Never commit credentials, tokens or secrets. Keep an `.env.example` file containing names and safe descriptions only.

```dotenv
PUBLIC_SITE_URL=
PUBLIC_CONTACT_EMAIL=
PUBLIC_BOOKING_URL=
PUBLIC_ANALYTICS_ID=
CONTACT_FORM_ENDPOINT=
```

Classify variables as public or server-only. Validate required variables when the application starts and fail with a clear message when configuration is incomplete.

## Content Governance

All public claims must have an owner and an evidence source.

### Must be verified before release

- Client and partner logos
- Project-delivery totals
- Customer totals
- Years of experience
- Performance improvements
- User and download figures
- Uptime or availability claims
- Testimonials and job titles
- Certifications and compliance statements
- Contact details
- Copyright year

Do not publish client names, project details or metrics without written permission. Where approval is unavailable, anonymise the case study and describe the sector, challenge, approach and verified outcome.

## Accessibility Standard

Target **WCAG 2.2 Level AA** across design, content and implementation.

Minimum expectations:

- Semantic landmarks and logical heading order
- Complete keyboard navigation
- Visible keyboard focus
- Sufficient text and interface contrast
- Text alternatives for meaningful images
- Accessible names for controls and icons
- Form labels, instructions and useful error messages
- Minimum target sizes for interactive controls
- No colour-only communication
- Responsive reflow without horizontal page scrolling
- Support for zoom and text resizing
- Reduced-motion support
- Screen-reader testing on critical journeys

Accessibility must be checked through both automated analysis and manual testing.

## Responsive Behaviour

Design and test mobile-first. At minimum, verify:

- small mobile screens;
- large mobile screens;
- tablet portrait and landscape;
- standard laptop widths;
- large desktop screens; and
- 200% and 400% browser zoom.

Navigation, comparison cards, case studies, metrics, technology logos, testimonials and the footer must reflow without clipped or unreadable content.

## Performance Expectations

- Optimise and appropriately size all images.
- Prefer modern image formats with safe fallbacks where required.
- Lazy-load below-the-fold media.
- Minimise client-side JavaScript.
- Avoid layout shifts by reserving media dimensions.
- Self-host or efficiently load essential fonts.
- Remove unused dependencies and styles.
- Cache static assets using content hashes.
- Measure performance on realistic mobile devices and networks.

Define measurable performance budgets in the implementation phase and enforce them in continuous integration.

## SEO and Discoverability

Each public page should provide:

- a unique title and meta description;
- one clear primary heading;
- descriptive internal links;
- canonical metadata;
- social-sharing metadata;
- structured data where valid;
- an XML sitemap;
- a purposeful robots policy; and
- human-readable URLs.

Recommended future landing pages include AI development, product engineering, cloud and DevOps, web development, mobile development, healthcare software and SaaS development.

## Security and Privacy

- Do not expose secrets in browser code or repository history.
- Validate and sanitise all submitted data.
- Apply rate limiting and abuse protection to public forms.
- Use secure transport and security headers.
- Keep dependencies updated and reviewed.
- Collect only data required for a defined purpose.
- Provide clear privacy and cookie information.
- Obtain consent before loading non-essential tracking technologies where required.
- Maintain a responsible vulnerability-reporting process in `SECURITY.md`.

## Analytics and Conversion Measurement

Track business outcomes rather than page views alone. Suggested events include:

- consultation CTA selected;
- contact form started;
- contact form submitted successfully;
- case study opened;
- service page opened;
- booking flow started;
- booking completed; and
- qualified enquiry source.

Analytics must respect consent choices and avoid capturing sensitive form content.

## Testing Strategy

### Automated checks

- Formatting and linting
- Type checking
- Unit tests
- Component tests
- Critical user-journey tests
- Accessibility checks
- Broken-link checks
- Dependency and secret scanning
- Production build verification

### Manual checks

- Responsive visual review
- Keyboard-only navigation
- Screen-reader review of key journeys
- Contact and booking flows
- Cross-browser verification
- Content and claim approval
- Privacy and legal review
- Analytics and consent validation

## Branching and Pull Requests

Use short-lived branches and pull requests into a protected main branch.

Suggested naming:

```text
feature/homepage-hero
feature/case-study-section
fix/mobile-navigation
content/update-ai-services
chore/dependency-updates
```

Each pull request should include:

- a clear summary;
- the business or user reason;
- screenshots for visual changes;
- testing performed;
- accessibility considerations;
- risks or follow-up work; and
- confirmation that no secrets or unapproved client information were added.

## Definition of Done

A change is complete when:

- Acceptance criteria are met.
- Code has been reviewed.
- Automated checks pass.
- Responsive behaviour is verified.
- Accessibility impact is checked.
- Content is accurate and approved.
- No secrets or sensitive data are present.
- Relevant documentation is updated.
- The production build succeeds.
- Rollback or recovery implications are understood.

## Deployment

Use separate environments for development, preview or test, and production.

A production deployment should require:

1. A successful validated build
2. Passing automated tests
3. Approved content and design review
4. Accessibility and responsive checks
5. Security and dependency checks
6. Environment configuration validation
7. Post-deployment smoke testing
8. Monitoring of errors and critical conversion journeys

Document the chosen hosting platform, deployment pipeline, domain configuration, rollback process and operational ownership when these decisions are finalised.

## Design Handoff Notes

The mockup is a strategic visual direction, not a source of approved public claims. During implementation:

- use a shared design-token system;
- build reusable section and card components;
- preserve clear spacing and hierarchy;
- replace placeholder logos and photography with licensed assets;
- use real interface screenshots only with permission;
- provide mobile and tablet variants;
- define hover, focus, active, loading, empty, success and error states; and
- document component behaviour in the design file and codebase.

## Roadmap

### Phase 1: Foundation

- Confirm framework, hosting and content-management approach
- Finalise brand tokens and component library
- Implement responsive navigation, footer and core layouts
- Establish quality, security and deployment checks

### Phase 2: Core launch

- Implement homepage and service pages
- Add verified case studies and testimonials
- Implement contact and consultation journeys
- Complete accessibility, performance and SEO validation

### Phase 3: Growth

- Add industry landing pages
- Publish useful technical and business insight content
- Introduce marketing automation and lead qualification
- Run evidence-based conversion experiments
- Localise content when market demand justifies it

## Contributing

1. Create a focused branch from the latest main branch.
2. Make the smallest coherent change.
3. Add or update tests and documentation.
4. Run all local quality checks.
5. Open a pull request using the repository template.
6. Address review feedback before merge.

Never add unlicensed assets, confidential material, client-sensitive information or production credentials.

## Supporting Documents

Recommended repository documents:

- `CONTRIBUTING.md` - contribution and review workflow
- `SECURITY.md` - vulnerability-reporting process
- `CODE_OF_CONDUCT.md` - collaboration expectations, if external contributors are accepted
- `LICENSE` - repository usage rights
- `docs/design/` - design decisions and component behaviour
- `docs/content/` - content ownership and approval evidence
- `docs/architecture/` - implementation and deployment decisions

## Licence

**All rights reserved unless a separate licence is explicitly added to this repository.**

The DevNextra name, branding, website design, written content, images and source code must not be copied, redistributed or used commercially without written permission from the repository owner.

## Contact

For project or business enquiries, use the verified contact details published on the production DevNextra website.

---

**DevNextra**  
*Scale. Innovate. Deliver.*
