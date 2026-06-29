import { SITE_URL, absoluteUrl } from './seo.js'

export const CONTENT_HOME_LINKS = [
  {
    label: 'Knowledge center',
    href: '/resources',
    description: 'Explore guides, docs, academy articles, workflow templates, comparisons, and company resources.',
  },
  {
    label: 'Guides',
    href: '/guides',
    description: 'Practical workflows for task management, team communication, remote work, AI, and operations.',
  },
  {
    label: 'Documentation',
    href: '/docs',
    description: 'Product-led help for setting up workspaces, projects, tasks, communication, and AI support.',
  },
  {
    label: 'Comparison center',
    href: '/compare',
    description: 'Balanced, honest comparison pages for teams evaluating Asystence with adjacent tools.',
  },
]

export const FOOTER_CONTENT_LINKS = [
  { label: 'Resources', href: '/resources' },
  { label: 'Guides', href: '/guides' },
  { label: 'Docs', href: '/docs' },
  { label: 'Academy', href: '/academy' },
  { label: 'Templates', href: '/templates' },
  { label: 'Compare', href: '/compare' },
  { label: 'Media kit', href: '/media-kit' },
  { label: 'Company', href: '/company' },
]

const page = (path, config) => ({
  path,
  type: 'guide',
  schemaType: 'Article',
  ...config,
})

export const CONTENT_PAGES = {
  '/resources': page('/resources', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Resources',
    eyebrow: 'Knowledge center',
    title: 'Asystence resources for work management, collaboration, and internal operations.',
    intro:
      'A structured knowledge center for teams evaluating or adopting an AI-powered work OS across tasks, communication, projects, workspaces, remote work, and operations.',
    seo: {
      title: 'Asystence Knowledge Center | Work Management Resources',
      description:
        'Explore Asystence guides, docs, academy articles, workflow templates, comparisons, and company resources for AI work management and team operations.',
    },
    highlights: [
      ['Guides for operating teams', 'Practical workflows for planning, task ownership, project communication, remote coordination, and operations management.'],
      ['Product-led documentation', 'Focused help for creating workspaces, organizing projects and tasks, using communication features, and working with AI assistance.'],
      ['Authority resources', 'Company, media, product facts, brand assets, release notes, comparison pages, and external SEO material in one place.'],
    ],
    sections: [
      ['Start with the platform', 'Use feature and solution pages to understand Asystence as a unified workspace for work management, collaboration, and internal operations.'],
      ['Go deeper with guides', 'Use the guide library to evaluate real workflows such as task planning, project management with chat, async communication, and operations visibility.'],
      ['Support evaluation and press', 'Use comparison pages and company resources when preparing vendor reviews, media coverage, directory listings, or internal buying discussions.'],
    ],
    checklistTitle: 'Resource architecture',
    checklist: [
      'Use /guides for practical workflow education.',
      'Use /docs for product-led setup and adoption help.',
      'Use /academy for category education and buyer-intent explanations.',
      'Use /compare for balanced alternative evaluation.',
      'Use /media-kit, /press, /product-facts, and /brand-assets for external authority work.',
    ],
    linkGroups: [
      {
        title: 'Core libraries',
        links: ['/guides', '/docs', '/academy', '/templates', '/compare', '/features'],
      },
      {
        title: 'Authority infrastructure',
        links: ['/company', '/press', '/media-kit', '/brand-assets', '/product-facts', '/product-screenshots'],
      },
      {
        title: 'Technical and partner resources',
        links: ['/release-notes', '/changelog', '/integrations', '/api-overview', '/external-seo-kit'],
      },
    ],
    faq: [
      {
        question: 'Why does Asystence have a knowledge center?',
        answer:
          'The knowledge center helps teams understand work management, collaboration, communication, operations workflows, and Asystence product adoption from one organized place.',
      },
      {
        question: 'Are these pages product documentation or marketing pages?',
        answer:
          'They are public, product-led resources. They explain real product positioning and workflows without changing the application experience.',
      },
    ],
    related: ['/features/work-management', '/guides/getting-started-with-work-os', '/compare', '/media-kit'],
  }),
  '/guides': page('/guides', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Guides',
    eyebrow: 'Guides',
    title: 'Guides for running work, communication, and operations in one workspace.',
    intro:
      'Practical, product-led guides for teams evaluating better ways to plan work, coordinate communication, manage projects, support remote teams, and improve operations visibility.',
    seo: {
      title: 'Work Management Guides | Asystence',
      description:
        'Read guides for task management, project management with team chat, team communication, remote teamwork, AI work management, and operations workflows.',
    },
    highlights: [
      ['Workflow-first guidance', 'Each guide maps a real operating problem to Asystence capabilities across tasks, communication, workspaces, and AI.'],
      ['Built for evaluation', 'Guides help teams compare work management approaches without relying on generic productivity advice.'],
      ['Connected to product pages', 'Each guide links back to the feature and solution pages that explain the relevant Asystence capability.'],
    ],
    sections: [
      ['Planning and ownership', 'Learn how to define tasks, owners, blockers, priorities, and work visibility without separating planning from execution.'],
      ['Communication and collaboration', 'Understand how channels, direct messages, mentions, huddles, updates, and knowledge support project follow-through.'],
      ['Operations and AI', 'Explore how AI-assisted summaries, health signals, reporting, reviews, OKRs, and attendance context support internal operations.'],
    ],
    linkGroups: [
      {
        title: 'Guide library',
        links: [
          '/guides/getting-started-with-work-os',
          '/guides/task-management-best-practices',
          '/guides/project-management-with-team-chat',
          '/guides/team-communication-for-execution',
          '/guides/remote-team-workflows',
          '/guides/operations-management-workflows',
        ],
      },
    ],
    faq: [
      {
        question: 'Who are these guides for?',
        answer:
          'They are for founders, operators, managers, and team leads evaluating how to consolidate work management, communication, and visibility in one workspace.',
      },
    ],
    related: ['/docs', '/academy', '/templates', '/features/work-management'],
  }),
  '/docs': page('/docs', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Docs',
    eyebrow: 'Product docs',
    title: 'Product-led documentation for setting up and using Asystence.',
    intro:
      'Public documentation for understanding core Asystence setup patterns: workspaces, projects, tasks, team communication, and AI-assisted work management.',
    seo: {
      title: 'Asystence Documentation | Workspace, Projects, Tasks, Communication, AI',
      description:
        'Read Asystence documentation for creating workspaces, organizing projects and tasks, using team communication, and adopting AI work assistant capabilities.',
    },
    highlights: [
      ['Setup clarity', 'Docs explain how teams can think about workspace creation, project structure, task organization, and adoption paths.'],
      ['Product-aligned content', 'Documentation describes real Asystence capabilities without changing product flows or inventing unsupported features.'],
      ['Useful for evaluators', 'Docs help teams understand whether the product structure fits their operating model before they start.'],
    ],
    sections: [
      ['Workspace setup', 'Understand how a workspace becomes the shared home for people, projects, communication, knowledge, and operating signals.'],
      ['Execution setup', 'Learn how projects, tasks, owners, blockers, comments, channels, and huddles fit together.'],
      ['Management visibility', 'Review how AI assistance, reporting, reviews, OKRs, and workspace health can support managers and teams.'],
    ],
    linkGroups: [
      {
        title: 'Documentation library',
        links: ['/docs/create-workspace', '/docs/organize-projects', '/docs/organize-tasks', '/docs/team-communication', '/docs/ai-work-assistant'],
      },
    ],
    faq: [
      {
        question: 'Are these replacement product docs?',
        answer:
          'These are public documentation pages that explain product concepts and setup patterns. In-app behavior and support flows remain unchanged.',
      },
    ],
    related: ['/guides/getting-started-with-work-os', '/features/workspaces', '/features/task-management', '/features/ai-work-assistant'],
  }),
  '/academy': page('/academy', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Academy',
    eyebrow: 'Work management academy',
    title: 'Learn the categories behind work operating systems and AI work management.',
    intro:
      'Educational pages that explain work OS, task management versus work management, async team communication, and internal operations platforms for buyers doing category research.',
    seo: {
      title: 'Work Management Academy | Asystence',
      description:
        'Learn about work operating systems, task management versus work management, async communication, and internal operations platforms.',
    },
    highlights: [
      ['Category education', 'Academy pages explain search concepts in plain language so buyers understand what they are evaluating.'],
      ['Connected to Asystence', 'Each article links the category back to product capabilities without overclaiming or repetitive copy.'],
      ['Useful for long-term authority', 'The academy builds topical depth around work management, team communication, AI assistance, and operations.'],
    ],
    sections: [
      ['Define the category', 'Clarify what buyers mean by work OS, AI work management, workspace software, and operations platforms.'],
      ['Compare adjacent ideas', 'Explain how task management, team collaboration, team communication, and work management overlap but are not identical.'],
      ['Map concepts to practice', 'Show how category concepts translate into workspace setup, project execution, communication, and visibility.'],
    ],
    linkGroups: [
      {
        title: 'Academy articles',
        links: [
          '/academy/work-operating-system',
          '/academy/task-management-vs-work-management',
          '/academy/async-team-communication',
          '/academy/internal-operations-platform',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the academy vendor-neutral?',
        answer:
          'It is product-led but educational. It explains category concepts and then shows where Asystence fits without making unsupported claims.',
      },
    ],
    related: ['/resources', '/features/work-management', '/features/team-collaboration-software', '/solutions/operations'],
  }),
  '/templates': page('/templates', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Templates',
    eyebrow: 'Workflow templates',
    title: 'Workflow templates for project launches, operations reviews, and remote handoffs.',
    intro:
      'Reusable operating patterns that teams can adapt inside Asystence when they need clearer project starts, weekly operations reviews, or remote handoff routines.',
    seo: {
      title: 'Workflow Templates for Work Management | Asystence',
      description:
        'Use Asystence workflow templates for project launch planning, weekly operations reviews, and remote team handoffs.',
    },
    highlights: [
      ['Reusable work patterns', 'Templates turn broad work management ideas into practical structures teams can apply.'],
      ['Designed for one workspace', 'Each template assumes tasks, communication, project context, and follow-up live together.'],
      ['Helpful for adoption', 'Teams can use templates to create shared habits without redesigning their whole operating model.'],
    ],
    sections: [
      ['Project launch routines', 'Create a repeatable structure for owners, milestones, risks, channels, and decision tracking.'],
      ['Operations reviews', 'Use a weekly rhythm to inspect blocked work, cross-functional dependencies, team signals, and follow-up.'],
      ['Remote handoffs', 'Make async updates, owners, blockers, context, and next steps visible across locations and schedules.'],
    ],
    linkGroups: [
      {
        title: 'Template library',
        links: ['/templates/project-launch-plan', '/templates/weekly-operations-review', '/templates/remote-team-handoff'],
      },
    ],
    faq: [
      {
        question: 'Are these downloadable templates?',
        answer:
          'They are public workflow templates written as implementation patterns. Teams can adapt them inside Asystence workspaces and projects.',
      },
    ],
    related: ['/guides/task-management-best-practices', '/guides/operations-management-workflows', '/features/project-management-with-chat'],
  }),
  '/compare': page('/compare', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Compare',
    eyebrow: 'Comparison center',
    title: 'Compare Asystence with adjacent work, chat, and documentation tools.',
    intro:
      'Balanced comparison pages for teams evaluating whether they need a unified work OS or a specialized tool for project management, communication, or documentation.',
    seo: {
      title: 'Compare Asystence | Work OS Alternatives',
      description:
        'Compare Asystence with ClickUp, Slack, Notion, and monday.com using balanced product-fit comparisons for teams evaluating a work OS.',
    },
    highlights: [
      ['Balanced by design', 'Comparison pages explain fit, tradeoffs, and likely team needs without unsupported superiority claims.'],
      ['Focused on use case', 'The goal is to help buyers understand whether they need a unified work OS or a more specialized tool.'],
      ['Connected to feature pages', 'Each comparison links back to work management, task management, communication, and workspace pages.'],
    ],
    sections: [
      ['Project and task tools', 'Compare Asystence with broad work management tools when the buyer needs task execution plus communication and operations visibility.'],
      ['Communication tools', 'Compare Asystence with communication-centered tools when the buyer needs chat attached to project execution.'],
      ['Documentation tools', 'Compare Asystence with documentation-centered tools when the buyer needs knowledge connected to tasks, projects, and operations.'],
    ],
    linkGroups: [
      {
        title: 'Comparison pages',
        links: ['/compare/asystence-vs-clickup', '/compare/asystence-vs-slack', '/compare/asystence-vs-notion', '/compare/asystence-vs-monday'],
      },
    ],
    faq: [
      {
        question: 'Are these comparison pages claiming Asystence is always better?',
        answer:
          'No. They are balanced pages that explain which type of team may prefer each product category and when Asystence is a good fit.',
      },
    ],
    related: ['/features/work-management', '/features/team-communication', '/features/workspaces', '/resources'],
  }),
  '/features': page('/features', {
    type: 'hub',
    schemaType: 'CollectionPage',
    navLabel: 'Feature overview',
    eyebrow: 'Feature overview',
    title: 'Asystence feature overview for work management, communication, AI, and operations.',
    intro:
      'A crawlable overview of the Asystence feature system, linking together work management, task management, communication, collaboration, workspaces, AI assistance, and operations workflows.',
    seo: {
      title: 'Asystence Feature Overview | Work OS Features',
      description:
        'Explore Asystence features for AI work management, task management, team communication, project management with chat, workspaces, and operations.',
    },
    highlights: [
      ['Execution layer', 'Task management, project work, subtasks, owners, workflows, blockers, and project health support delivery.'],
      ['Collaboration layer', 'Channels, direct messages, mentions, huddles, wiki knowledge, and updates keep teams coordinated.'],
      ['Operations layer', 'Attendance, reports, reviews, OKRs, admin visibility, AI summaries, and workspace health support management rhythms.'],
    ],
    sections: [
      ['Work management', 'Plan and coordinate work across projects, tasks, teams, and operations from one workspace.'],
      ['Team communication', 'Keep project conversations, huddles, updates, and mentions close to the work they affect.'],
      ['AI and operations', 'Use AI-assisted summaries, risk signals, workspace health, reviews, OKRs, and reporting to improve visibility.'],
    ],
    linkGroups: [
      {
        title: 'Feature pages',
        links: [
          '/features/work-management',
          '/features/task-management',
          '/features/project-management-with-chat',
          '/features/team-communication',
          '/features/team-collaboration-software',
          '/features/workspaces',
          '/features/operations-work-management',
          '/features/ai-work-assistant',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Asystence a single-purpose tool?',
        answer:
          'No. It is positioned as a work OS that combines task management, communication, collaboration, workspaces, operations visibility, and AI assistance.',
      },
    ],
    related: ['/resources', '/guides/getting-started-with-work-os', '/solutions/operations', '/solutions/remote-teams'],
  }),
  '/guides/getting-started-with-work-os': page('/guides/getting-started-with-work-os', {
    navLabel: 'Getting started with a work OS',
    eyebrow: 'Getting started guide',
    title: 'Getting started with a work OS for teams.',
    intro:
      'A practical guide for teams moving from scattered task lists, chat threads, and status updates into one operating workspace.',
    seo: {
      title: 'Getting Started with a Work OS for Teams | Asystence Guide',
      description:
        'Learn how teams can start with a work OS by setting up workspaces, projects, task ownership, communication channels, and AI-assisted visibility.',
    },
    highlights: [
      ['Start with the workspace', 'The workspace should represent how the team actually operates, not only where tasks are stored.'],
      ['Create a small operating rhythm', 'Begin with projects, owners, channels, blockers, and weekly review habits before adding more structure.'],
      ['Add AI after context exists', 'AI summaries and signals are most useful once tasks, conversations, and operational data have a shared home.'],
    ],
    sections: [
      ['Map the team first', 'Identify the core team, managers, recurring projects, communication channels, and decisions that need a durable home.'],
      ['Create project and task structure', 'Organize projects around outcomes, assign owners, define status stages, and make blockers visible from the beginning.'],
      ['Review and refine weekly', 'Use workspace health, reports, reviews, and summaries to understand what is working and where the operating rhythm needs adjustment.'],
    ],
    checklistTitle: 'Starter checklist',
    checklist: [
      'Create the workspace and invite the initial team.',
      'Define the first projects and owners.',
      'Create communication channels for project or team coordination.',
      'Move active tasks into the workspace instead of importing everything at once.',
      'Review blockers, overdue work, and decisions weekly.',
    ],
    faq: [
      {
        question: 'Should teams migrate everything on day one?',
        answer:
          'Usually no. Start with active work, define ownership, then expand the workspace once the team has a stable rhythm.',
      },
      {
        question: 'What is the fastest path to value?',
        answer:
          'Create a workspace, organize current projects, assign owners, and move project communication close to the work.',
      },
    ],
    related: ['/docs/create-workspace', '/features/work-management', '/features/workspaces', '/templates/project-launch-plan'],
  }),
  '/guides/task-management-best-practices': page('/guides/task-management-best-practices', {
    navLabel: 'Task management best practices',
    eyebrow: 'Task management guide',
    title: 'Task management best practices for teams that need real follow-through.',
    intro:
      'A guide to organizing tasks around owners, priority, deadlines, blockers, communication, and review habits instead of treating tasks as isolated checklist items.',
    seo: {
      title: 'Task Management Best Practices for Teams | Asystence Guide',
      description:
        'Learn task management best practices for ownership, prioritization, deadlines, blocker visibility, team communication, and workspace execution.',
    },
    highlights: [
      ['Ownership before volume', 'A task system fails when teams create work faster than they clarify ownership and next action.'],
      ['Visibility before reporting', 'Teams need status, blockers, owners, and decisions visible before reports become meaningful.'],
      ['Communication near tasks', 'Task quality improves when questions, decisions, and context are close to the work item.'],
    ],
    sections: [
      ['Define the outcome', 'Write tasks around the intended result, not only the activity. Add enough context for a teammate to act without a second meeting.'],
      ['Assign ownership clearly', 'Each task should have an accountable owner, visible status, expected next action, and enough context to reduce handoff friction.'],
      ['Review blockers frequently', 'Use project health, comments, and workspace signals to identify stalled work before it becomes hidden operational drag.'],
    ],
    checklistTitle: 'Task quality checklist',
    checklist: [
      'Every task has one accountable owner.',
      'The expected outcome is visible in the task description or title.',
      'The task belongs to the right project or workspace context.',
      'Blockers are visible and reviewed regularly.',
      'Important decisions stay connected to the task or project.',
    ],
    faq: [
      {
        question: 'What makes task management effective for teams?',
        answer:
          'Effective task management combines ownership, status, deadlines, blockers, project context, and communication in a system teams actually use.',
      },
      {
        question: 'How does Asystence support these practices?',
        answer:
          'Asystence connects tasks, subtasks, project context, communication, reports, and AI-assisted workspace signals in one workspace.',
      },
    ],
    related: ['/features/task-management', '/docs/organize-tasks', '/features/project-management-with-chat', '/academy/task-management-vs-work-management'],
  }),
  '/guides/project-management-with-team-chat': page('/guides/project-management-with-team-chat', {
    navLabel: 'Project management with team chat',
    eyebrow: 'Project management guide',
    title: 'How to run project management with team chat without losing accountability.',
    intro:
      'A guide for teams that want project boards and team conversations in the same operating context without burying decisions in disconnected chat threads.',
    seo: {
      title: 'Project Management with Team Chat Guide | Asystence',
      description:
        'Learn how to combine project management and team chat using projects, tasks, channels, mentions, huddles, owners, and blockers.',
    },
    highlights: [
      ['Chat should create clarity', 'Project conversations should make ownership and next actions clearer, not add another place to check.'],
      ['Boards need conversation context', 'Tasks and project boards are more useful when decisions and questions stay nearby.'],
      ['Huddles need follow-through', 'Meeting or huddle decisions should convert into tracked work, owners, and blockers.'],
    ],
    sections: [
      ['Create project communication zones', 'Use dedicated channels or conversation patterns for project decisions, updates, blockers, and review notes.'],
      ['Turn chat into action', 'When a decision happens, capture the owner, task, due signal, and project context before the conversation moves on.'],
      ['Review project health with context', 'Use task status, blockers, channel updates, huddle outcomes, and AI-assisted summaries to understand delivery risk.'],
    ],
    checklistTitle: 'Project chat checklist',
    checklist: [
      'Each project has a clear communication home.',
      'Important decisions are attached to tasks or project context.',
      'Huddle outcomes become owners, tasks, or follow-up items.',
      'Blockers are visible outside chat threads.',
      'Project reviews include both status and communication context.',
    ],
    faq: [
      {
        question: 'Why combine project management and chat?',
        answer:
          'Because project decisions often happen in conversation. Keeping chat near tasks and projects helps preserve accountability and context.',
      },
    ],
    related: ['/features/project-management-with-chat', '/features/team-communication', '/templates/project-launch-plan', '/docs/organize-projects'],
  }),
  '/guides/team-communication-for-execution': page('/guides/team-communication-for-execution', {
    navLabel: 'Team communication for execution',
    eyebrow: 'Communication guide',
    title: 'Team communication for work execution, decisions, and follow-through.',
    intro:
      'A guide for turning team communication into clear decisions, owners, task updates, project context, and operating visibility.',
    seo: {
      title: 'Team Communication for Work Execution | Asystence Guide',
      description:
        'Learn how to structure team communication around tasks, projects, decisions, owners, huddles, and work execution.',
    },
    highlights: [
      ['Communication should reduce ambiguity', 'A strong communication rhythm clarifies priorities, decisions, owners, and blocked work.'],
      ['Channels need purpose', 'Project, team, or operations channels work best when they have a clear reason to exist.'],
      ['Updates need follow-through', 'Communication becomes execution when updates create decisions, owners, or next actions.'],
    ],
    sections: [
      ['Separate signal from noise', 'Define which updates belong in channels, direct messages, huddles, tasks, project comments, or workspace reviews.'],
      ['Attach decisions to work', 'When a decision affects delivery, keep it near the task or project it changes so the team can find it later.'],
      ['Use huddles intentionally', 'Use huddles for alignment, blockers, and decisions, then capture follow-up in the workspace.'],
    ],
    checklistTitle: 'Communication operating rules',
    checklist: [
      'Channels have clear ownership and purpose.',
      'Decisions that change work are captured near the work.',
      'Huddles produce visible follow-up.',
      'Project updates include status, blockers, and next steps.',
      'Direct messages do not become the only source of critical decisions.',
    ],
    faq: [
      {
        question: 'What is execution-focused communication?',
        answer:
          'It is team communication structured to clarify decisions, owners, blockers, and next actions rather than only exchanging messages.',
      },
    ],
    related: ['/features/team-communication', '/features/team-collaboration-software', '/features/project-management-with-chat', '/academy/async-team-communication'],
  }),
  '/guides/remote-team-workflows': page('/guides/remote-team-workflows', {
    navLabel: 'Remote team workflows',
    eyebrow: 'Remote work guide',
    title: 'Remote team workflows for async work, handoffs, and visibility.',
    intro:
      'A guide for remote teams that need durable context across time zones: tasks, owners, updates, decisions, huddles, knowledge, and workspace health.',
    seo: {
      title: 'Remote Team Workflow Guide | Asystence',
      description:
        'Learn remote team workflows for async updates, task ownership, project handoffs, communication, knowledge, and workspace visibility.',
    },
    highlights: [
      ['Async context must be durable', 'Remote teams need important information to remain visible after the meeting, message, or time zone window ends.'],
      ['Handoffs need ownership', 'Every handoff should clarify owner, status, blocker, next action, and where context lives.'],
      ['Managers need signal without more meetings', 'Reports, workspace health, and AI-assisted summaries help leaders understand progress without interrupting teams.'],
    ],
    sections: [
      ['Create an async update rhythm', 'Define where project updates, blockers, decisions, and next actions are captured for teammates in different schedules.'],
      ['Use tasks for handoff clarity', 'Attach owners, status, comments, project context, and blockers to the work instead of relying on memory or messages.'],
      ['Review visibility weekly', 'Use workspace health, reports, attendance context, and summaries to inspect whether remote work is moving clearly.'],
    ],
    checklistTitle: 'Remote workflow checklist',
    checklist: [
      'Each project has a visible owner and update location.',
      'Handoffs include current status, blocker, owner, and next action.',
      'Important decisions are recorded where future teammates can find them.',
      'Huddles are followed by written context or tasks.',
      'Managers review workspace signals without adding unnecessary meetings.',
    ],
    faq: [
      {
        question: 'How can remote teams reduce context loss?',
        answer:
          'They need a shared workspace where tasks, updates, decisions, huddles, knowledge, and summaries stay attached to work.',
      },
    ],
    related: ['/solutions/remote-teams', '/templates/remote-team-handoff', '/features/team-collaboration-software', '/features/workspaces'],
  }),
  '/guides/operations-management-workflows': page('/guides/operations-management-workflows', {
    navLabel: 'Operations management workflows',
    eyebrow: 'Operations guide',
    title: 'Operations management workflows for coordination, visibility, and follow-through.',
    intro:
      'A guide for operations teams that need recurring work, project follow-up, communication, reporting, reviews, OKRs, and workspace health in one operating rhythm.',
    seo: {
      title: 'Operations Management Workflow Guide | Asystence',
      description:
        'Learn operations management workflows for internal coordination, recurring work, task ownership, communication, reporting, reviews, OKRs, and visibility.',
    },
    highlights: [
      ['Operations work is recurring', 'Good systems make recurring work, handoffs, and follow-up visible instead of leaving them in memory.'],
      ['Visibility needs context', 'Reports only help when connected to actual tasks, owners, conversations, and blockers.'],
      ['Management rhythms matter', 'Reviews, OKRs, attendance context, and AI summaries help operations leaders understand execution quality.'],
    ],
    sections: [
      ['Define recurring workflows', 'Identify the repeated operational processes that need owners, tasks, checkpoints, and review rhythm.'],
      ['Connect updates to execution', 'Use channels, mentions, huddles, tasks, and project context to prevent operational updates from becoming scattered.'],
      ['Review health signals', 'Use reports, attendance context, reviews, OKRs, and AI-assisted summaries to understand friction and follow-through.'],
    ],
    checklistTitle: 'Operations workflow checklist',
    checklist: [
      'Recurring workflows have visible owners and review points.',
      'Cross-functional handoffs are tracked in the workspace.',
      'Operational blockers are visible before weekly review.',
      'Reports connect to actual tasks and team context.',
      'AI summaries support follow-up instead of replacing ownership.',
    ],
    faq: [
      {
        question: 'What makes operations work different from project work?',
        answer:
          'Operations work often repeats across teams and depends on handoffs, visibility, follow-up, and management rhythms, not only one-time delivery.',
      },
    ],
    related: ['/solutions/operations', '/features/operations-work-management', '/templates/weekly-operations-review', '/features/ai-work-assistant'],
  }),
  '/docs/create-workspace': page('/docs/create-workspace', {
    type: 'doc',
    navLabel: 'Create a workspace',
    eyebrow: 'Documentation',
    title: 'How to think about creating a workspace in Asystence.',
    intro:
      'A product-led setup page for teams deciding how to structure their first Asystence workspace around people, projects, communication, and operating visibility.',
    seo: {
      title: 'Create a Workspace in Asystence | Setup Guide',
      description:
        'Learn how to structure an Asystence workspace for teams, projects, task management, communication, knowledge, and operations visibility.',
    },
    highlights: [
      ['Workspace as operating home', 'The workspace should represent the team or organization area where work, communication, and visibility come together.'],
      ['Start with active work', 'Bring in the projects and tasks that need immediate coordination before adding every historical detail.'],
      ['Invite the right people', 'Include admins, managers, and contributors who need shared context and accountability.'],
    ],
    sections: [
      ['Name the operating space', 'Choose a workspace name that matches how the team thinks about ownership and collaboration.'],
      ['Define initial roles', 'Decide who will administer the workspace, manage projects, contribute tasks, and review operating signals.'],
      ['Create the first project structure', 'Add active projects, owners, communication channels, and task patterns that support immediate execution.'],
    ],
    checklistTitle: 'Workspace setup checklist',
    checklist: [
      'Choose a workspace name that matches the team or business area.',
      'Identify admins, managers, and contributors.',
      'Create the first project or operating area.',
      'Set up communication patterns for project and team updates.',
      'Review workspace health and reports after initial usage begins.',
    ],
    faq: [
      {
        question: 'Should each department have a separate workspace?',
        answer:
          'It depends on how your organization manages work. Use one workspace when teams need shared context, and separate workspaces when operating boundaries are truly separate.',
      },
    ],
    related: ['/features/workspaces', '/guides/getting-started-with-work-os', '/docs/organize-projects', '/solutions/operations'],
  }),
  '/docs/organize-projects': page('/docs/organize-projects', {
    type: 'doc',
    navLabel: 'Organize projects',
    eyebrow: 'Documentation',
    title: 'How to organize projects in Asystence around execution and communication.',
    intro:
      'A setup guide for structuring projects so tasks, owners, blockers, channels, decisions, and reviews support delivery.',
    seo: {
      title: 'Organize Projects in Asystence | Project Setup Guide',
      description:
        'Learn how to organize projects in Asystence with tasks, owners, blockers, workflow stages, communication, and project health visibility.',
    },
    highlights: [
      ['Project outcomes first', 'Projects should be organized around outcomes and deliverables, not only activity categories.'],
      ['Communication nearby', 'Important project conversations should stay close to the project and tasks they affect.'],
      ['Health and blockers visible', 'A project structure should make risks, owners, stalled tasks, and decisions easier to find.'],
    ],
    sections: [
      ['Define the project outcome', 'Clarify what the project is meant to deliver and which team owns follow-through.'],
      ['Create execution stages', 'Use workflow stages, sprint boards, or status patterns that match how the team moves work forward.'],
      ['Attach communication context', 'Keep channels, mentions, huddles, comments, and updates connected to the project so decisions stay discoverable.'],
    ],
    checklistTitle: 'Project organization checklist',
    checklist: [
      'Project outcome and owner are clear.',
      'Tasks and subtasks represent actual delivery work.',
      'Workflow stages match the team process.',
      'Blockers are visible and reviewed.',
      'Project communication has a clear home.',
    ],
    faq: [
      {
        question: 'What makes a project easy to manage?',
        answer:
          'A clear outcome, visible ownership, structured tasks, communication context, and regular review of blockers and project health.',
      },
    ],
    related: ['/features/project-management-with-chat', '/docs/organize-tasks', '/templates/project-launch-plan', '/guides/project-management-with-team-chat'],
  }),
  '/docs/organize-tasks': page('/docs/organize-tasks', {
    type: 'doc',
    navLabel: 'Organize tasks',
    eyebrow: 'Documentation',
    title: 'How to organize tasks, owners, blockers, and follow-up in Asystence.',
    intro:
      'A product-led page for structuring tasks so teams can understand what is assigned, why it matters, who owns it, and what is blocking progress.',
    seo: {
      title: 'Organize Tasks in Asystence | Task Management Guide',
      description:
        'Learn how to organize tasks in Asystence with owners, subtasks, blockers, project context, comments, and workflow visibility.',
    },
    highlights: [
      ['Tasks need context', 'A useful task explains the outcome, owner, project relationship, and any important discussion.'],
      ['Subtasks clarify steps', 'Subtasks help teams split larger work into visible progress without losing the parent outcome.'],
      ['Blockers deserve visibility', 'Blocked work should be easy to identify during project and workspace reviews.'],
    ],
    sections: [
      ['Write tasks as outcomes', 'Use task titles and descriptions that make the expected result clear to the owner and reviewer.'],
      ['Connect tasks to projects', 'Keep tasks attached to the project or workspace context where decisions and communication happen.'],
      ['Review stalled tasks', 'Use comments, status, blockers, reports, and workspace signals to understand where follow-up is needed.'],
    ],
    checklistTitle: 'Task organization checklist',
    checklist: [
      'Task outcome is clear.',
      'One accountable owner is visible.',
      'Subtasks break down complex work.',
      'Comments capture relevant context.',
      'Blockers are surfaced in reviews.',
    ],
    faq: [
      {
        question: 'How should teams avoid messy task lists?',
        answer:
          'Keep tasks tied to outcomes, owners, project context, and review rhythms instead of creating unowned reminders.',
      },
    ],
    related: ['/features/task-management', '/guides/task-management-best-practices', '/docs/organize-projects', '/academy/task-management-vs-work-management'],
  }),
  '/docs/team-communication': page('/docs/team-communication', {
    type: 'doc',
    navLabel: 'Team communication setup',
    eyebrow: 'Documentation',
    title: 'How to set up team communication around work execution.',
    intro:
      'A setup page for using channels, direct messages, mentions, and huddles as part of the Asystence work management experience.',
    seo: {
      title: 'Team Communication Setup in Asystence | Channels, DMs, Huddles',
      description:
        'Learn how to use team communication in Asystence with channels, direct messages, mentions, huddles, project updates, and task context.',
    },
    highlights: [
      ['Channels need clear purpose', 'Channels work best when they map to project, team, or operational coordination needs.'],
      ['Mentions should create action', 'Use mentions to route attention to decisions, blockers, and follow-up, not only to notify people.'],
      ['Huddles need captured outcomes', 'Important huddle decisions should become tasks, comments, or project context.'],
    ],
    sections: [
      ['Create channels around work', 'Align channels to projects, teams, or workflows where conversation needs to stay discoverable.'],
      ['Use DMs thoughtfully', 'Direct messages help with quick coordination, but critical decisions should move back into project or task context.'],
      ['Close the loop after huddles', 'Capture decisions, owners, blockers, and follow-up items so huddles improve execution visibility.'],
    ],
    checklistTitle: 'Communication setup checklist',
    checklist: [
      'Channels have purpose and owners.',
      'Project decisions are captured near work.',
      'Mentions are used for relevant attention.',
      'Huddle outcomes become visible follow-up.',
      'Critical context does not stay only in DMs.',
    ],
    faq: [
      {
        question: 'How does Asystence connect communication and work?',
        answer:
          'Team communication lives in the same workspace as tasks, projects, huddles, updates, and operating signals.',
      },
    ],
    related: ['/features/team-communication', '/guides/team-communication-for-execution', '/features/project-management-with-chat', '/academy/async-team-communication'],
  }),
  '/docs/ai-work-assistant': page('/docs/ai-work-assistant', {
    type: 'doc',
    navLabel: 'AI work assistant setup',
    eyebrow: 'Documentation',
    title: 'How to adopt AI-assisted work management in Asystence.',
    intro:
      'A public setup page for understanding how AI-assisted summaries, workspace health, coaching nudges, and operational signals fit into Asystence work management.',
    seo: {
      title: 'AI Work Assistant Setup in Asystence | AI Work Management',
      description:
        'Learn how AI-assisted summaries, workspace health, coaching nudges, risk signals, and operational context support work management in Asystence.',
    },
    highlights: [
      ['AI depends on context', 'AI assistance is more useful when tasks, communication, projects, and operating signals share one workspace.'],
      ['Summaries support reviews', 'AI-assisted summaries can help managers understand what changed and where follow-up is needed.'],
      ['Signals support prioritization', 'Workspace health and risk signals help teams identify work that deserves attention.'],
    ],
    sections: [
      ['Start with structured work', 'Before relying on AI assistance, make sure projects, tasks, owners, and communication are organized enough to provide useful context.'],
      ['Use summaries for follow-up', 'Treat summaries as a way to review activity, blockers, and next steps, not as a replacement for clear ownership.'],
      ['Review risk and health signals', 'Use workspace health, performance context, attendance signals, and project execution data to guide management attention.'],
    ],
    checklistTitle: 'AI adoption checklist',
    checklist: [
      'Projects and tasks are structured.',
      'Communication and updates happen in the workspace.',
      'Managers review summaries alongside actual work.',
      'Risk signals lead to follow-up, not assumptions.',
      'AI support stays connected to operating rhythms.',
    ],
    faq: [
      {
        question: 'Does AI replace managers or owners?',
        answer:
          'No. AI-assisted context supports visibility, summaries, and follow-up. Human owners and managers still drive decisions and execution.',
      },
    ],
    related: ['/features/ai-work-assistant', '/academy/ai-assistant-for-work', '/features/work-management', '/solutions/operations'],
  }),
  '/academy/work-operating-system': page('/academy/work-operating-system', {
    navLabel: 'What is a work operating system?',
    eyebrow: 'Academy',
    title: 'What is a work operating system for teams?',
    intro:
      'A work operating system is a shared platform where teams plan work, coordinate communication, track execution, preserve knowledge, and review operating signals.',
    seo: {
      title: 'What Is a Work Operating System? | Asystence Academy',
      description:
        'Learn what a work operating system is, how it differs from task tools and chat tools, and how teams use a work OS for execution and visibility.',
    },
    highlights: [
      ['More than tasks', 'A work OS includes tasks, but it also connects communication, workspaces, knowledge, reporting, and operations context.'],
      ['More than chat', 'A work OS keeps conversations close to the work they affect so decisions can become action.'],
      ['More than reporting', 'A work OS creates the context that makes reporting, AI summaries, and workspace health useful.'],
    ],
    sections: [
      ['Define the operating layer', 'The operating layer is where teams translate priorities into projects, tasks, owners, communication, and follow-up.'],
      ['Connect execution and visibility', 'A work OS helps managers and contributors see what is moving, what is blocked, and where context lives.'],
      ['Support a repeatable rhythm', 'Teams use workspaces, projects, communication, reviews, OKRs, reports, and summaries to create consistent operating habits.'],
    ],
    checklistTitle: 'Work OS evaluation criteria',
    checklist: [
      'Does it connect tasks and communication?',
      'Does it organize workspaces and projects clearly?',
      'Does it support managers and contributors?',
      'Does it preserve decisions and knowledge?',
      'Does it create useful operational visibility?',
    ],
    faq: [
      {
        question: 'Is a work OS the same as project management software?',
        answer:
          'Not exactly. Project management is one part of a work OS. A work OS also includes communication, workspace context, visibility, and management rhythms.',
      },
    ],
    related: ['/features/work-management', '/resources', '/academy/task-management-vs-work-management', '/guides/getting-started-with-work-os'],
  }),
  '/academy/task-management-vs-work-management': page('/academy/task-management-vs-work-management', {
    navLabel: 'Task management vs work management',
    eyebrow: 'Academy',
    title: 'Task management vs work management: what teams should compare.',
    intro:
      'Task management focuses on assignments and status. Work management connects tasks to projects, communication, workspace context, reporting, and operations visibility.',
    seo: {
      title: 'Task Management vs Work Management | Asystence Academy',
      description:
        'Learn the difference between task management and work management, and when teams need a broader work management platform.',
    },
    highlights: [
      ['Task management answers what needs doing', 'It helps teams define assignments, owners, due signals, status, and subtasks.'],
      ['Work management answers how work moves', 'It connects tasks to communication, projects, workspaces, reports, and operating rhythms.'],
      ['The right choice depends on context', 'Small teams may begin with tasks; growing teams often need connected communication and visibility.'],
    ],
    sections: [
      ['When task management is enough', 'If work is simple and communication is already clear, a task tool can provide enough structure.'],
      ['When work management matters', 'If decisions, blockers, communication, reviews, and reports are scattered, a work management platform may be a better fit.'],
      ['How Asystence fits', 'Asystence includes task management, but positions it inside a wider workspace for communication, collaboration, AI, and operations.'],
    ],
    checklistTitle: 'Buying questions',
    checklist: [
      'Do tasks need project and workspace context?',
      'Do conversations often create or change work?',
      'Do managers need visibility beyond task status?',
      'Do teams need reviews, OKRs, attendance context, or reports?',
      'Would AI summaries be more useful with connected workspace data?',
    ],
    faq: [
      {
        question: 'Should every team choose work management over task management?',
        answer:
          'No. Teams should choose the level of system they need. Work management is most useful when tasks, communication, and visibility need to be connected.',
      },
    ],
    related: ['/features/task-management', '/features/work-management', '/guides/task-management-best-practices', '/compare'],
  }),
  '/academy/async-team-communication': page('/academy/async-team-communication', {
    navLabel: 'Async team communication',
    eyebrow: 'Academy',
    title: 'Async team communication for distributed work and project follow-through.',
    intro:
      'Async communication helps teams coordinate across schedules when updates, decisions, tasks, and context remain visible after the conversation ends.',
    seo: {
      title: 'Async Team Communication for Work Execution | Asystence Academy',
      description:
        'Learn how async team communication supports remote work, task ownership, project handoffs, decisions, and follow-through.',
    },
    highlights: [
      ['Async needs a durable home', 'Messages alone are not enough if decisions and next actions disappear into history.'],
      ['Context matters more than volume', 'Effective async work depends on clear tasks, owners, updates, and project context.'],
      ['Visibility reduces meetings', 'When teams can see what changed, fewer meetings are needed just to recover context.'],
    ],
    sections: [
      ['Write updates for future readers', 'Good async updates explain status, blocker, owner, decision, and next action.'],
      ['Link communication to work', 'Attach decisions to tasks, projects, or workspace knowledge so teammates can act later.'],
      ['Use summaries and reviews', 'AI-assisted summaries, project reviews, and workspace health can help managers understand async progress.'],
    ],
    checklistTitle: 'Async communication checklist',
    checklist: [
      'Updates include status, blocker, and next action.',
      'Decisions are stored near tasks or projects.',
      'Handoffs have owners.',
      'Huddles produce written follow-up.',
      'Workspace reviews catch stale or blocked work.',
    ],
    faq: [
      {
        question: 'Is async communication only for remote teams?',
        answer:
          'No. Any team with multiple projects, busy schedules, or cross-functional handoffs can benefit from durable async context.',
      },
    ],
    related: ['/guides/remote-team-workflows', '/solutions/remote-teams', '/features/team-communication', '/templates/remote-team-handoff'],
  }),
  '/academy/internal-operations-platform': page('/academy/internal-operations-platform', {
    navLabel: 'Internal operations platform',
    eyebrow: 'Academy',
    title: 'What is an internal operations platform for teams?',
    intro:
      'An internal operations platform helps teams coordinate recurring work, projects, communication, accountability, reporting, and management rhythms in one place.',
    seo: {
      title: 'Internal Operations Platform for Teams | Asystence Academy',
      description:
        'Learn what an internal operations platform is and how it connects tasks, communication, reporting, reviews, OKRs, and execution visibility.',
    },
    highlights: [
      ['Operations work crosses functions', 'Internal operations usually involve handoffs, recurring processes, shared ownership, and ongoing visibility.'],
      ['Tools must connect', 'Task lists, chat, reports, reviews, and knowledge are more useful when they share context.'],
      ['Visibility supports leadership', 'Managers need to see blockers, activity, performance rhythms, and operating health without adding busywork.'],
    ],
    sections: [
      ['Coordinate recurring work', 'Create visible workflows for repeated processes, follow-up, project handoffs, and operational reviews.'],
      ['Connect people and signals', 'Bring tasks, communication, attendance context, reports, reviews, OKRs, and AI summaries into the same workspace.'],
      ['Improve operating rhythm', 'Use weekly reviews, project health, and workspace intelligence to identify friction and clarify follow-up.'],
    ],
    checklistTitle: 'Operations platform criteria',
    checklist: [
      'Can it coordinate recurring processes?',
      'Does it connect tasks and communication?',
      'Does it support reporting and workspace health?',
      'Does it include management rhythms such as reviews or OKRs?',
      'Can it preserve context across teams?',
    ],
    faq: [
      {
        question: 'Is internal operations software only for large companies?',
        answer:
          'No. Any team coordinating recurring work, handoffs, projects, communication, and management visibility can benefit from an operating platform.',
      },
    ],
    related: ['/solutions/operations', '/features/operations-work-management', '/guides/operations-management-workflows', '/templates/weekly-operations-review'],
  }),
  '/templates/project-launch-plan': page('/templates/project-launch-plan', {
    type: 'template',
    navLabel: 'Project launch plan template',
    eyebrow: 'Workflow template',
    title: 'Project launch plan template for tasks, owners, chat, and checkpoints.',
    intro:
      'A reusable project launch structure for teams that want milestones, owners, channels, risks, decisions, and follow-up visible from day one.',
    seo: {
      title: 'Project Launch Plan Template | Asystence',
      description:
        'Use this project launch plan template to structure tasks, owners, communication channels, milestones, risks, decisions, and project checkpoints.',
    },
    highlights: [
      ['Launch with ownership', 'Clarify who owns the project, each milestone, and each follow-up item.'],
      ['Create communication structure', 'Define where project discussions, huddles, and decisions should live.'],
      ['Review risks early', 'Surface blockers, dependencies, and decision points before launch drift begins.'],
    ],
    sections: [
      ['Project brief', 'Document the outcome, owner, stakeholders, important context, risks, and definition of done.'],
      ['Execution board', 'Create tasks for milestones, assign owners, define workflow states, and attach relevant comments or docs.'],
      ['Communication rhythm', 'Set the project channel, huddle cadence, update format, and review checkpoints.'],
    ],
    checklistTitle: 'Template steps',
    checklist: [
      'Create a project with outcome and owner.',
      'Add milestones as tasks or grouped work.',
      'Assign owners and identify dependencies.',
      'Create or identify the communication channel.',
      'Schedule review checkpoints and capture decisions.',
    ],
    faq: [
      {
        question: 'What makes a project launch easier to manage?',
        answer:
          'A clear outcome, visible owners, project communication structure, known risks, and a review rhythm from the start.',
      },
    ],
    related: ['/features/project-management-with-chat', '/docs/organize-projects', '/guides/project-management-with-team-chat', '/templates'],
  }),
  '/templates/weekly-operations-review': page('/templates/weekly-operations-review', {
    type: 'template',
    navLabel: 'Weekly operations review template',
    eyebrow: 'Workflow template',
    title: 'Weekly operations review template for visibility, blockers, and follow-through.',
    intro:
      'A repeatable weekly review structure for operations teams inspecting active work, blocked tasks, handoffs, team signals, and next actions.',
    seo: {
      title: 'Weekly Operations Review Template | Asystence',
      description:
        'Use this weekly operations review template for blockers, active work, team signals, handoffs, reporting, reviews, OKRs, and follow-up.',
    },
    highlights: [
      ['Review active work', 'Inspect projects, task status, owners, blockers, and cross-functional handoffs.'],
      ['Review team signals', 'Use attendance context, reports, reviews, OKRs, and workspace health where relevant.'],
      ['Create follow-up', 'End the review with owners, due signals, decisions, and next actions visible in the workspace.'],
    ],
    sections: [
      ['Work review', 'Look at current projects, blocked tasks, overdue work, and unclear ownership.'],
      ['Operating signal review', 'Review reporting, workspace health, attendance context, reviews, OKRs, and AI-assisted summaries.'],
      ['Follow-up capture', 'Convert decisions into tasks, owners, project updates, or communication follow-up.'],
    ],
    checklistTitle: 'Weekly review agenda',
    checklist: [
      'Review blocked and overdue work.',
      'Review project health and major handoffs.',
      'Review operational signals and team context.',
      'Create follow-up tasks with owners.',
      'Record decisions where the team can find them.',
    ],
    faq: [
      {
        question: 'How long should a weekly operations review be?',
        answer:
          'Keep it focused on signals and follow-up. The workspace should do most of the context work before the meeting begins.',
      },
    ],
    related: ['/features/operations-work-management', '/solutions/operations', '/guides/operations-management-workflows', '/academy/internal-operations-platform'],
  }),
  '/templates/remote-team-handoff': page('/templates/remote-team-handoff', {
    type: 'template',
    navLabel: 'Remote team handoff template',
    eyebrow: 'Workflow template',
    title: 'Remote team handoff template for async updates and shared accountability.',
    intro:
      'A reusable handoff structure for distributed teams that need status, owner, blocker, decision, context, and next action visible across schedules.',
    seo: {
      title: 'Remote Team Handoff Template | Asystence',
      description:
        'Use this remote team handoff template for async updates, owners, blockers, decisions, task context, and next actions.',
    },
    highlights: [
      ['Write for the next teammate', 'A handoff should explain what changed, what is blocked, who owns next action, and where context lives.'],
      ['Connect handoffs to tasks', 'Keep handoff notes attached to the relevant project or task so they remain actionable.'],
      ['Reduce status meetings', 'Better handoffs reduce the need for meetings that only recover context.'],
    ],
    sections: [
      ['Status summary', 'State current status, what changed, what is complete, and what still needs attention.'],
      ['Blockers and decisions', 'Document blockers, unresolved decisions, dependencies, and who needs to respond.'],
      ['Next action and owner', 'End with a specific owner, next step, due signal, and link to relevant task or project context.'],
    ],
    checklistTitle: 'Handoff fields',
    checklist: [
      'Current status.',
      'What changed since the last update.',
      'Blockers or dependencies.',
      'Owner and next action.',
      'Relevant task, project, or workspace context.',
    ],
    faq: [
      {
        question: 'What makes a good remote handoff?',
        answer:
          'A good handoff gives the next teammate enough context to act without needing to reconstruct the conversation.',
      },
    ],
    related: ['/solutions/remote-teams', '/guides/remote-team-workflows', '/academy/async-team-communication', '/features/team-collaboration-software'],
  }),
  '/compare/asystence-vs-clickup': page('/compare/asystence-vs-clickup', {
    type: 'comparison',
    navLabel: 'Asystence vs ClickUp',
    eyebrow: 'Comparison',
    title: 'Asystence vs ClickUp: work OS fit for teams that need communication and operations context.',
    intro:
      'A balanced comparison for teams evaluating a broad project/task management platform against a unified workspace that emphasizes tasks, communication, AI, and internal operations.',
    seo: {
      title: 'Asystence vs ClickUp | Work OS Comparison',
      description:
        'Compare Asystence and ClickUp for task management, project execution, team communication, workspaces, AI assistance, and operations visibility.',
    },
    highlights: [
      ['ClickUp fit', 'ClickUp is a broad productivity and project management platform with many configurable work views.'],
      ['Asystence fit', 'Asystence is positioned around unified work management, team communication, workspaces, AI assistance, and internal operations.'],
      ['Evaluation lens', 'Teams should compare how much they need configurability versus a workspace where communication and operations context are central.'],
    ],
    sections: [
      ['Task and project work', 'Both products can fit task and project management evaluation. Teams should compare how each product organizes ownership, workflows, and project context.'],
      ['Communication context', 'Asystence emphasizes team communication inside the same workspace as tasks and operations. Buyers should compare whether chat-context matters to their workflow.'],
      ['Operations visibility', 'Asystence messaging includes attendance, reviews, OKRs, reports, workspace health, and AI-assisted operational context.'],
    ],
    comparisonRows: [
      ['Primary buyer need', 'Unified work OS with communication and operations context', 'Broad project and work management configurability'],
      ['Communication angle', 'Channels, direct messages, mentions, and huddles positioned near work', 'Communication depends on the team configuration and connected tools'],
      ['Operations angle', 'Includes attendance, reviews, OKRs, reports, workspace health, and AI context in positioning', 'Can support operations workflows through configuration'],
      ['Best fit', 'Teams wanting tasks, chat, AI, and internal operations in one workspace', 'Teams wanting highly configurable project/work management views'],
    ],
    checklistTitle: 'Questions to ask',
    checklist: [
      'Do we need built-in communication close to project execution?',
      'Do operations signals such as attendance, reviews, and reporting matter?',
      'Do we prefer a focused work OS or high configurability?',
      'Will managers and contributors use the same workspace daily?',
    ],
    faq: [
      {
        question: 'Is Asystence claiming to be better than ClickUp?',
        answer:
          'No. This page explains fit. ClickUp may be a strong option for teams that need broad configurability; Asystence is positioned around unified work, communication, AI, and operations context.',
      },
    ],
    related: ['/compare', '/features/work-management', '/features/project-management-with-chat', '/features/operations-work-management'],
  }),
  '/compare/asystence-vs-slack': page('/compare/asystence-vs-slack', {
    type: 'comparison',
    navLabel: 'Asystence vs Slack',
    eyebrow: 'Comparison',
    title: 'Asystence vs Slack: team communication compared with a work OS.',
    intro:
      'A balanced comparison for teams deciding whether they primarily need a communication platform or a workspace that connects communication to tasks, projects, AI, and operations.',
    seo: {
      title: 'Asystence vs Slack | Team Communication and Work OS Comparison',
      description:
        'Compare Asystence and Slack for team communication, task management, project context, huddles, AI work management, and operations visibility.',
    },
    highlights: [
      ['Slack fit', 'Slack is widely known as a communication-centered platform for team chat and channels.'],
      ['Asystence fit', 'Asystence includes communication, but positions it inside a broader work OS for projects, tasks, workspaces, AI, and operations.'],
      ['Evaluation lens', 'Teams should compare whether communication alone is enough or whether chat needs to stay attached to execution.'],
    ],
    sections: [
      ['Communication needs', 'If the central problem is team messaging, a communication-first platform may be a natural fit.'],
      ['Execution needs', 'If chat decisions need to become owners, tasks, project updates, and operating signals, a work OS may be more relevant.'],
      ['Visibility needs', 'Managers may need reporting, workspace health, reviews, OKRs, and AI summaries beyond message history.'],
    ],
    comparisonRows: [
      ['Primary buyer need', 'Communication connected to work management and operations', 'Team messaging and communication workflows'],
      ['Task management angle', 'Tasks, projects, owners, blockers, and reports are part of the platform story', 'Task workflows usually depend on integrations or separate tools'],
      ['Huddles and chat', 'Communication is positioned near execution context', 'Communication is the central product experience'],
      ['Best fit', 'Teams that need chat plus tasks, projects, and operations visibility', 'Teams primarily optimizing for messaging and channel-based collaboration'],
    ],
    checklistTitle: 'Questions to ask',
    checklist: [
      'Do project decisions get lost in chat history?',
      'Do we need task ownership and chat in the same place?',
      'Do managers need operational visibility beyond messages?',
      'Do we want fewer tools for communication and execution?',
    ],
    faq: [
      {
        question: 'Can Asystence replace a chat-only workflow?',
        answer:
          'For teams that want communication connected to tasks, projects, huddles, and workspace context, Asystence can be evaluated as a broader alternative.',
      },
    ],
    related: ['/compare', '/features/team-communication', '/features/project-management-with-chat', '/features/team-collaboration-software'],
  }),
  '/compare/asystence-vs-notion': page('/compare/asystence-vs-notion', {
    type: 'comparison',
    navLabel: 'Asystence vs Notion',
    eyebrow: 'Comparison',
    title: 'Asystence vs Notion: workspace documentation compared with execution-focused work management.',
    intro:
      'A balanced comparison for teams deciding whether they need a flexible documentation/workspace tool or a work OS centered on tasks, communication, AI, and operations.',
    seo: {
      title: 'Asystence vs Notion | Workspace and Work Management Comparison',
      description:
        'Compare Asystence and Notion for workspace management, documentation, tasks, team communication, AI-assisted work, and operations visibility.',
    },
    highlights: [
      ['Notion fit', 'Notion is often used for flexible documentation, wiki pages, databases, and team knowledge.'],
      ['Asystence fit', 'Asystence includes wiki and knowledge positioning, but emphasizes execution, communication, task ownership, and operations visibility.'],
      ['Evaluation lens', 'Teams should compare whether the primary need is flexible documentation or work execution with communication and operating signals.'],
    ],
    sections: [
      ['Knowledge needs', 'Documentation-centered tools can be strong for flexible notes, docs, and knowledge organization.'],
      ['Execution needs', 'Teams needing task ownership, project health, channels, huddles, and operational reporting may need a more execution-centered workspace.'],
      ['Management needs', 'Reviews, OKRs, attendance context, reports, and AI-assisted workspace health support an operating rhythm beyond documentation.'],
    ],
    comparisonRows: [
      ['Primary buyer need', 'Execution-focused workspace with tasks, communication, and operations context', 'Flexible docs, wiki, databases, and knowledge organization'],
      ['Communication angle', 'Team communication is part of the workspace story', 'Communication often happens through comments or connected tools'],
      ['Operations angle', 'Includes operations visibility in positioning', 'Operations workflows depend on how teams configure pages and databases'],
      ['Best fit', 'Teams wanting documentation connected to work execution', 'Teams primarily organizing knowledge and flexible workspace content'],
    ],
    checklistTitle: 'Questions to ask',
    checklist: [
      'Is our primary pain documentation or execution?',
      'Do tasks need built-in team communication?',
      'Do managers need reports, reviews, OKRs, or workspace health?',
      'Will knowledge stay useful if it is separated from project delivery?',
    ],
    faq: [
      {
        question: 'Is Asystence a documentation tool?',
        answer:
          'Asystence includes wiki and knowledge positioning, but the broader product story is task execution, communication, workspaces, AI, and operations.',
      },
    ],
    related: ['/compare', '/features/workspaces', '/features/team-collaboration-software', '/docs/create-workspace'],
  }),
  '/compare/asystence-vs-monday': page('/compare/asystence-vs-monday', {
    type: 'comparison',
    navLabel: 'Asystence vs monday.com',
    eyebrow: 'Comparison',
    title: 'Asystence vs monday.com: work management compared with AI workspace operations.',
    intro:
      'A balanced comparison for teams evaluating a work management platform against a workspace operating system that emphasizes communication, AI context, and internal operations.',
    seo: {
      title: 'Asystence vs monday.com | Work Management Comparison',
      description:
        'Compare Asystence and monday.com for work management, task execution, team communication, AI assistance, workspaces, and internal operations.',
    },
    highlights: [
      ['monday.com fit', 'monday.com is known as a work management platform with configurable boards and business workflows.'],
      ['Asystence fit', 'Asystence is positioned as a unified work OS with task management, team communication, AI assistance, workspaces, and operations context.'],
      ['Evaluation lens', 'Teams should compare workflow configurability, communication needs, AI context, and operations visibility.'],
    ],
    sections: [
      ['Work management needs', 'Both products can be evaluated for planning, tracking, and managing team work.'],
      ['Communication and operations needs', 'Asystence emphasizes chat, huddles, reviews, OKRs, attendance context, reports, and workspace health in one system.'],
      ['AI context needs', 'AI assistance is more useful when connected to the tasks, conversations, projects, and operations signals inside the workspace.'],
    ],
    comparisonRows: [
      ['Primary buyer need', 'Unified work OS with communication, AI, and operations context', 'Configurable work management boards and workflows'],
      ['Communication angle', 'Channels, DMs, mentions, and huddles are part of the product story', 'Communication depends on configured workflows and connected tools'],
      ['Operations angle', 'Operations work management, reports, attendance, reviews, and OKRs are part of positioning', 'Can support operations workflows through configuration'],
      ['Best fit', 'Teams wanting execution, communication, and operating signals in one workspace', 'Teams wanting configurable board-based work management'],
    ],
    checklistTitle: 'Questions to ask',
    checklist: [
      'Do we need communication and huddles close to tasks?',
      'Do we need attendance, reviews, OKRs, and reports in the operating model?',
      'Do we prefer a unified work OS or configurable boards?',
      'Will AI be more useful with workspace-wide context?',
    ],
    faq: [
      {
        question: 'Is this a direct feature-by-feature claim?',
        answer:
          'No. This is a fit comparison based on product positioning and buyer needs, not a claim that one product universally outperforms the other.',
      },
    ],
    related: ['/compare', '/features/work-management', '/features/operations-work-management', '/features/ai-work-assistant'],
  }),
  '/company': page('/company', {
    type: 'authority',
    schemaType: 'AboutPage',
    navLabel: 'Company',
    eyebrow: 'Company information',
    title: 'Company information for Asystence.',
    intro:
      'A public company information page for media, directories, partners, and evaluators who need a concise description of Asystence and its product category.',
    seo: {
      title: 'Asystence Company Information',
      description:
        'Learn about Asystence, an intelligent workspace platform for projects, tasks, team communication, AI assistance, people signals, and operations.',
    },
    highlights: [
      ['Product category', 'Asystence is positioned as an Intelligent Workspace Platform for teams.'],
      ['Core capabilities', 'Projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, reviews, OKRs, and reporting.'],
      ['Contact', 'Public inquiries can use hello@asystence.com.'],
    ],
    sections: [
      ['What Asystence does', 'Asystence brings projects, tasks, team communication, AI assistance, people signals, workspace intelligence, and operations visibility into one product-led platform.'],
      ['Who it helps', 'It is designed for teams and organizations that need a clearer operating layer for tasks, projects, communication, and management context.'],
      ['How to describe it', 'Lead with Intelligent Workspace Platform. Use work management, team collaboration, project management, or internal operations language as supporting category context.'],
    ],
    checklistTitle: 'Directory-ready facts',
    checklist: [
      'Product name: Asystence.',
      'Category: Intelligent Workspace Platform for teams.',
      'Website: https://asystence.com.',
      'App: https://app.asystence.com.',
      'Contact: hello@asystence.com.',
    ],
    faq: [
      {
        question: 'Can this page be used for directory submissions?',
        answer:
          'Yes. It provides consistent public company positioning and links to reusable descriptions for directory submissions.',
      },
    ],
    related: ['/product-facts', '/media-kit', '/external-seo-kit', '/press'],
  }),
  '/press': page('/press', {
    type: 'authority',
    schemaType: 'AboutPage',
    navLabel: 'Press',
    eyebrow: 'Press',
    title: 'Press and media information for Asystence.',
    intro:
      'A press page for writers, analysts, directories, and partners who need accurate public information about Asystence and its product positioning.',
    seo: {
      title: 'Asystence Press Information',
      description:
        'Find press-ready Asystence descriptions, product facts, media kit links, brand assets, and contact information.',
    },
    highlights: [
      ['Press summary', 'Asystence is an Intelligent Workspace Platform that connects projects, tasks, communication, AI assistance, people signals, and internal operations.'],
      ['Media resources', 'Use the media kit, product facts, brand assets, and screenshots page for accurate public references.'],
      ['Contact path', 'Use hello@asystence.com for press, partnership, or directory questions.'],
    ],
    sections: [
      ['Public positioning', 'Asystence should be described as an Intelligent Workspace Platform for teams and organizations.'],
      ['Coverage angles', 'Relevant topics include AI work management, team collaboration, workspace software, operations visibility, and project management with chat.'],
      ['Source of truth', 'Use product facts and external SEO kit descriptions to keep public mentions consistent.'],
    ],
    checklistTitle: 'Press checklist',
    checklist: [
      'Use the approved short or medium description.',
      'Link to https://asystence.com.',
      'Use the Asystence name consistently.',
      'Avoid unsupported metrics, customer claims, or awards.',
      'Contact hello@asystence.com for confirmation.',
    ],
    faq: [
      {
        question: 'Are customer logos or testimonials available?',
        answer:
          'No public customer proof is provided in this repository, so coverage should not invent customer logos, testimonials, or usage statistics.',
      },
    ],
    related: ['/media-kit', '/product-facts', '/brand-assets', '/external-seo-kit'],
  }),
  '/media-kit': page('/media-kit', {
    type: 'authority',
    schemaType: 'AboutPage',
    navLabel: 'Media kit',
    eyebrow: 'Media kit',
    title: 'Asystence media kit for public descriptions, positioning, and assets.',
    intro:
      'A public media kit with approved positioning language, brand usage notes, product facts, and links to reusable external SEO descriptions.',
    seo: {
      title: 'Asystence Media Kit',
      description:
        'Access Asystence media kit information including company descriptions, product positioning, brand asset guidance, product facts, and press resources.',
    },
    highlights: [
      ['Short description', 'Asystence is an Intelligent Workspace Platform for teams.'],
      ['Medium description', 'Asystence connects projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, and operations in one platform.'],
      ['Long description', 'Asystence helps teams coordinate work, communication, project delivery, people availability, reviews, OKRs, reporting, and AI-assisted operational visibility from one connected workspace.'],
    ],
    sections: [
      ['Approved category language', 'Lead with Intelligent Workspace Platform. Supporting category language can include AI work management, project management, team collaboration, or internal operations software.'],
      ['Brand usage', 'Use the Asystence name exactly. Use existing public logo assets from the site when an image is required.'],
      ['What not to claim', 'Do not invent customer counts, awards, testimonials, revenue, security certifications, or comparison claims that are not publicly supported.'],
    ],
    checklistTitle: 'Media kit links',
    checklist: [
      'Company information: /company.',
      'Product facts: /product-facts.',
      'Brand assets: /brand-assets.',
      'Product screenshots guidance: /product-screenshots.',
      'Directory descriptions: /external-seo-kit.',
    ],
    faq: [
      {
        question: 'Can these descriptions be reused externally?',
        answer:
          'Yes. They are intended for consistent external descriptions, directory submissions, press references, and social profiles.',
      },
    ],
    related: ['/company', '/press', '/brand-assets', '/product-facts', '/external-seo-kit'],
  }),
  '/brand-assets': page('/brand-assets', {
    type: 'authority',
    schemaType: 'AboutPage',
    navLabel: 'Brand assets',
    eyebrow: 'Brand assets',
    title: 'Asystence brand assets and usage guidance.',
    intro:
      'A simple brand assets page for using the Asystence name, logo, category language, and public product positioning consistently.',
    seo: {
      title: 'Asystence Brand Assets',
      description:
        'Find Asystence brand asset guidance, logo usage notes, approved category language, and public positioning guidelines.',
    },
    highlights: [
      ['Name', 'Use Asystence exactly as written.'],
      ['Logo', 'Use the public logo asset already available at /asystence-logo.png when needed.'],
      ['Positioning', 'Use Intelligent Workspace Platform as the primary public category.'],
    ],
    sections: [
      ['Brand naming', 'Use Asystence as the product and company name. Avoid alternate spellings or splitting the name.'],
      ['Logo usage', 'Use the existing public logo when a directory, press page, or social profile requires an image. Do not distort or recolor it without a dedicated brand update.'],
      ['Messaging consistency', 'Describe Asystence as a product-led B2B platform for projects, tasks, communication, AI assistance, workspace intelligence, people signals, and operations.'],
    ],
    checklistTitle: 'Brand usage checklist',
    checklist: [
      'Use the product name consistently.',
      'Use the public logo asset.',
      'Do not invent a new tagline.',
      'Do not claim unsupported awards or certifications.',
      'Link brand references back to https://asystence.com.',
    ],
    faq: [
      {
        question: 'Is there a full brand system in the repository?',
        answer:
          'The landing site currently exposes the product name, visual system, colors, logo asset, and usage guidance. This page keeps external usage consistent.',
      },
    ],
    related: ['/media-kit', '/press', '/company', '/external-seo-kit'],
  }),
  '/product-facts': page('/product-facts', {
    type: 'authority',
    schemaType: 'AboutPage',
    navLabel: 'Product facts',
    eyebrow: 'Product facts',
    title: 'Product facts about Asystence.',
    intro:
      'A public facts page that summarizes what Asystence is, which capabilities are described on the landing site, and which claims should not be made without evidence.',
    seo: {
      title: 'Asystence Product Facts',
      description:
        'Review Asystence product facts for AI work management, task management, team communication, workspaces, operations, reviews, OKRs, and reporting.',
    },
    highlights: [
      ['Core category', 'Intelligent Workspace Platform for teams.'],
      ['Core capabilities', 'Projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, reporting, reviews, and OKRs.'],
      ['Public channels', 'Website, web app, desktop downloads, Android APK, and contact email are public on the landing site.'],
    ],
    sections: [
      ['What is publicly supported', 'The landing site supports messaging around tasks, projects, communication, huddles, workspaces, wiki, attendance, reviews, OKRs, reports, AI summaries, and integrations.'],
      ['What should not be claimed', 'Do not claim specific customer numbers, rankings, awards, uptime performance, security certifications, or market leadership without public evidence.'],
      ['How to use these facts', 'Use product facts when preparing press material, directory listings, comparison pages, or partner descriptions.'],
    ],
    checklistTitle: 'Fact-safe messaging',
    checklist: [
      'Use only capabilities visible in product positioning.',
      'Avoid unsupported numbers.',
      'Avoid fake customer proof.',
      'Avoid claims of superiority over competitors.',
      'Use balanced comparison language.',
    ],
    faq: [
      {
        question: 'Why include a product facts page?',
        answer:
          'It helps keep public descriptions accurate and reduces the risk of unsupported claims across SEO, press, and directory submissions.',
      },
    ],
    related: ['/company', '/press', '/media-kit', '/compare'],
  }),
  '/product-screenshots': page('/product-screenshots', {
    type: 'authority',
    schemaType: 'CollectionPage',
    navLabel: 'Product screenshots',
    eyebrow: 'Product screenshots',
    title: 'Product screenshot guidance for Asystence.',
    intro:
      'A screenshot planning page for future public media, directory listings, and press material, with guidance on which product areas should be captured when approved screenshots are available.',
    seo: {
      title: 'Asystence Product Screenshots',
      description:
        'Review Asystence product screenshot guidance for workspaces, projects, tasks, team communication, AI intelligence, reports, and operations pages.',
    },
    highlights: [
      ['Use approved screenshots only', 'Do not publish fabricated product screenshots or mock customer data.'],
      ['Show real product areas', 'Recommended captures include workspace health, projects, tasks, team communication, AI intelligence, reports, and admin views.'],
      ['Protect private data', 'Screenshots should use clean demo data or approved non-sensitive workspace content.'],
    ],
    sections: [
      ['Screenshot set', 'Prepare captures for homepage preview, task management, project management with chat, team communication, AI workspace intelligence, and operations reporting.'],
      ['Directory use', 'Software directories often request screenshots. This page defines what should be prepared before submission.'],
      ['Privacy standard', 'Remove personal data, private workspace names, real customer information, and sensitive project details before publishing.'],
    ],
    checklistTitle: 'Required screenshot set',
    checklist: [
      'Workspace overview or health view.',
      'Project board or task list.',
      'Team communication or channel view.',
      'AI intelligence or summary view.',
      'Reports, reviews, or operations visibility view.',
    ],
    faq: [
      {
        question: 'Why are no new screenshots generated here?',
        answer:
          'Product screenshots should come from approved product states with safe demo data. This repository pass prepares the structure and requirements.',
      },
    ],
    related: ['/media-kit', '/brand-assets', '/product-facts', '/external-seo-kit'],
  }),
  '/integrations': page('/integrations', {
    type: 'authority',
    schemaType: 'CollectionPage',
    navLabel: 'Integrations',
    eyebrow: 'Integrations',
    title: 'Asystence integrations overview.',
    intro:
      'A public overview of integration-related product positioning already referenced by the landing site, including Git automation, migration paths, SSO, API, webhooks, and backups.',
    seo: {
      title: 'Asystence Integrations Overview',
      description:
        'Review Asystence integration positioning for Git automation, Asana migration, Slack migration, SSO, API, webhooks, and backups.',
    },
    highlights: [
      ['Engineering workflows', 'The landing site references Git automation as part of the product story.'],
      ['Migration support', 'Asana migration and Slack migration are referenced as existing positioning, so they can be described at a high level.'],
      ['Enterprise connectivity', 'SSO, API, webhooks, backups, and custom integrations are referenced in public plan and feature copy.'],
    ],
    sections: [
      ['Migration paths', 'Teams evaluating Asystence may want to understand migration from task or chat systems such as Asana and Slack.'],
      ['Automation and webhooks', 'API and webhook positioning supports teams that need operational data to connect with external systems.'],
      ['Admin and enterprise needs', 'SSO, backups, custom integrations, and dedicated support are enterprise-oriented topics that require accurate sales or support confirmation.'],
    ],
    checklistTitle: 'Integration evaluation checklist',
    checklist: [
      'Identify the current source system.',
      'Clarify which data needs to move or connect.',
      'Confirm whether migration support is available for the exact use case.',
      'Review SSO, API, webhook, and backup requirements.',
      'Contact hello@asystence.com for unsupported integration questions.',
    ],
    faq: [
      {
        question: 'Does this page document every integration endpoint?',
        answer:
          'No. This is a public overview of integration positioning. Technical API details should be published only when confirmed and maintained.',
      },
    ],
    related: ['/api-overview', '/features/work-management', '/solutions/operations', '/product-facts'],
  }),
  '/api-overview': page('/api-overview', {
    type: 'authority',
    schemaType: 'TechArticle',
    navLabel: 'API overview',
    eyebrow: 'API overview',
    title: 'Asystence API and webhook overview.',
    intro:
      'A high-level public API overview for teams evaluating whether Asystence can fit into connected work management and operations workflows.',
    seo: {
      title: 'Asystence API and Webhook Overview',
      description:
        'Review the Asystence API and webhook overview for teams evaluating connected work management, integrations, automation, and operations workflows.',
    },
    highlights: [
      ['Public positioning only', 'This page explains API and webhook concepts at a high level because full public endpoint documentation is not provided here.'],
      ['Integration use cases', 'Relevant use cases include work management automation, project updates, operational reporting, and external system coordination.'],
      ['Maintainability standard', 'Detailed API docs should include authentication, endpoints, payloads, rate limits, examples, and change history when published.'],
    ],
    sections: [
      ['When teams need an API', 'Teams may need API access when they want Asystence work data to connect with internal systems, reporting tools, or automation workflows.'],
      ['When teams need webhooks', 'Webhooks are useful when external systems need to react to workspace or workflow events as they happen.'],
      ['What public docs should include later', 'Future API documentation should provide stable endpoints, authentication rules, payload examples, error handling, and versioning notes.'],
    ],
    checklistTitle: 'API documentation readiness checklist',
    checklist: [
      'Authentication model is documented.',
      'Endpoint list is complete and stable.',
      'Payload shapes and examples are accurate.',
      'Rate limits and errors are described.',
      'Changelog and versioning are maintained.',
    ],
    faq: [
      {
        question: 'Is this full API documentation?',
        answer:
          'No. It is an overview and readiness structure. Full technical API documentation should be published only when endpoints and contracts are ready to maintain publicly.',
      },
    ],
    related: ['/integrations', '/product-facts', '/release-notes', '/external-seo-kit'],
  }),
  '/external-seo-kit': page('/external-seo-kit', {
    type: 'authority',
    schemaType: 'Article',
    navLabel: 'External SEO kit',
    eyebrow: 'External SEO preparation',
    title: 'External SEO kit for directories, social profiles, and product listings.',
    intro:
      'Reusable public descriptions, submission guidance, and next actions for earning external mentions without inventing claims or creating low-quality outreach material.',
    seo: {
      title: 'Asystence External SEO Kit | Directory and Profile Descriptions',
      description:
        'Use the Asystence external SEO kit for directory submissions, company descriptions, social profile copy, product listing copy, and backlink preparation.',
    },
    highlights: [
      ['Short description', 'Asystence is an Intelligent Workspace Platform for teams.'],
      ['Medium description', 'Asystence connects projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, and internal operations in one platform.'],
      ['Long description', 'Asystence helps teams coordinate tasks, projects, conversations, workspaces, people availability, reviews, OKRs, reporting, and AI-assisted operational visibility from one connected workspace.'],
    ],
    sections: [
      ['Directory submission copy', 'Use the short description for narrow fields, the medium description for product directories, and the long description for richer software listings.'],
      ['Social profile copy', 'Describe Asystence as an Intelligent Workspace Platform for teams that need projects, tasks, communication, AI assistance, people signals, and operations visibility in one workspace.'],
      ['Backlink preparation', 'Pitch useful resources such as guides, academy pages, comparison pages, media kit, product facts, and templates rather than asking for generic homepage links.'],
    ],
    checklistTitle: 'External action checklist',
    checklist: [
      'Create or verify Google Search Console property for https://asystence.com.',
      'Submit https://asystence.com/sitemap.xml in Search Console.',
      'Prepare approved screenshots with safe demo data.',
      'Submit consistent descriptions to relevant software directories.',
      'Use media kit, product facts, and comparison pages for outreach references.',
      'Do not claim customers, awards, or statistics unless publicly verified.',
    ],
    faq: [
      {
        question: 'Can backlinks be created from this codebase?',
        answer:
          'No. This page prepares the assets and next actions required for external SEO, but actual submissions require accounts, approvals, and outreach.',
      },
      {
        question: 'Which accounts are needed next?',
        answer:
          'At minimum, Google Search Console access, software directory accounts, social profile access, and approved brand or screenshot assets are needed.',
      },
    ],
    related: ['/media-kit', '/company', '/press', '/product-facts', '/product-screenshots'],
  }),
}

export const CONTENT_PAGE_LIST = Object.values(CONTENT_PAGES)
export const CONTENT_PATHS = CONTENT_PAGE_LIST.map((entry) => entry.path)

export function getContentPage(path) {
  return CONTENT_PAGES[path]
}

export function getContentRelatedPaths(pageConfig) {
  return pageConfig.related || []
}

export function buildContentPageJsonLd(pageConfig) {
  const pageUrl = absoluteUrl(pageConfig.path)
  const isArticle = ['Article', 'TechArticle'].includes(pageConfig.schemaType)
  const basePage = {
    '@context': 'https://schema.org',
    '@type': pageConfig.schemaType || 'WebPage',
    name: pageConfig.seo.title,
    headline: pageConfig.title,
    url: pageUrl,
    description: pageConfig.seo.description,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Asystence',
      url: SITE_URL,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Asystence',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Work management software',
      url: SITE_URL,
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageConfig.path.split('/')[1] || 'Resources',
        item: absoluteUrl(`/${pageConfig.path.split('/')[1] || 'resources'}`),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageConfig.navLabel,
        item: pageUrl,
      },
    ],
  }

  const faq = pageConfig.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageConfig.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return [
    basePage,
    isArticle
      ? {
          '@context': 'https://schema.org',
          '@type': pageConfig.schemaType,
          headline: pageConfig.title,
          name: pageConfig.seo.title,
          url: pageUrl,
          description: pageConfig.seo.description,
          author: {
            '@type': 'Organization',
            name: 'Asystence',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Asystence',
            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/asystence-logo.png'),
            },
          },
        }
      : null,
    breadcrumb,
    faq,
  ]
}
