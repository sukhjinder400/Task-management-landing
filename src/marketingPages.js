import { SITE_URL, absoluteUrl } from './seo.js'

export const HOME_SEO = {
  title: 'Asystence | Intelligent Workspace Platform for Teams',
  description:
    'Asystence is an intelligent workspace platform for projects, tasks, team communication, AI assistance, workspace intelligence, attendance, availability, and operations.',
  path: '/',
}

export const HOME_RELATED_LINKS = [
  {
    label: 'AI work management software',
    href: '/features/work-management',
    description: 'Coordinate tasks, projects, conversations, and team signals from one operating layer.',
  },
  {
    label: 'Task management with collaboration',
    href: '/features/task-management',
    description: 'Plan, assign, track, and review work without separating tasks from team context.',
  },
  {
    label: 'Team communication platform',
    href: '/features/team-communication',
    description: 'Keep channels, direct messages, mentions, and huddles connected to execution.',
  },
  {
    label: 'Project management with chat',
    href: '/features/project-management-with-chat',
    description: 'Manage project delivery and team conversations in the same workspace.',
  },
  {
    label: 'Team collaboration software',
    href: '/features/team-collaboration-software',
    description: 'Bring tasks, communication, knowledge, and shared workspace context together.',
  },
  {
    label: 'Operations work management',
    href: '/features/operations-work-management',
    description: 'Connect operational workflows, team visibility, and AI-assisted management context.',
  },
  {
    label: 'Workspace management software',
    href: '/features/workspaces',
    description: 'Create shared spaces for projects, people, communication, knowledge, and reporting.',
  },
  {
    label: 'Remote team work OS',
    href: '/solutions/remote-teams',
    description: 'Give distributed teams one place for work, updates, handoffs, and accountability.',
  },
]

export const HOME_FAQS = [
  {
    question: 'What is a work operating system for teams?',
    answer:
      'A work operating system gives teams one place to plan tasks, coordinate communication, organize workspaces, track execution, and understand operational signals instead of splitting work across disconnected tools.',
  },
  {
    question: 'What is the difference between task management software and a work management platform?',
    answer:
      'Task management software focuses on assignments, deadlines, and status. A work management platform also connects communication, workspace context, reporting, reviews, team operations, and AI-assisted visibility around that work.',
  },
  {
    question: 'Can team communication and task management live in one platform?',
    answer:
      'Yes. Asystence is built around tasks, projects, channels, direct messages, mentions, huddles, and workspace context so teams can discuss work where execution happens.',
  },
  {
    question: 'What kind of teams use Asystence?',
    answer:
      'Asystence is suited for teams that need internal coordination across projects, tasks, conversations, workspaces, attendance, reviews, OKRs, and AI-assisted operational visibility.',
  },
]

export const MARKETING_PAGES = {
  '/features/work-management': {
    path: '/features/work-management',
    navLabel: 'Work management',
    eyebrow: 'AI work management software',
    title: 'AI work management software for teams that need one operating system.',
    intro:
      'Asystence connects project execution, task ownership, team communication, workspace context, and AI-assisted operational visibility so work can move without scattering across separate tools.',
    seo: {
      title: 'AI Work Management Software for Teams | Asystence',
      description:
        'Use Asystence as AI work management software for tasks, projects, communication, workspace collaboration, and internal operations in one platform.',
    },
    highlights: [
      ['One system for execution', 'Projects, tasks, conversations, attendance, reviews, and workspace intelligence stay connected instead of living in separate tools.'],
      ['AI-assisted management context', 'Workspace health, risk signals, summaries, and coaching nudges help teams see what needs attention.'],
      ['Built for operating rhythms', 'Managers and contributors can coordinate ownership, blockers, decisions, and follow-through from a shared workspace.'],
    ],
    sections: [
      ['Plan work across teams', 'Organize projects, define owners, track subtasks, and keep status visible so teams understand what is happening and who is accountable.'],
      ['Keep communication near execution', 'Use channels, direct messages, mentions, and huddles alongside tasks and projects so decisions remain close to delivery.'],
      ['Read operational signals earlier', 'Use AI-assisted summaries, workspace health views, attendance context, and reporting surfaces to notice friction before it becomes invisible work.'],
    ],
    decisionTitle: 'Why teams choose a work management platform instead of another point tool.',
    decisionPoints: [
      ['Less context switching', 'Tasks, conversations, updates, knowledge, and management signals are easier to trust when they share one workspace.'],
      ['Better follow-through', 'Ownership, blockers, reviews, OKRs, and reports stay tied to the work rather than becoming separate management rituals.'],
      ['More useful AI context', 'AI support is stronger when it can reason over workspace activity, project progress, and team operations together.'],
    ],
    useCases: [
      'Teams replacing separate task, chat, wiki, attendance, and review tools',
      'Managers who need one place to see ownership, blockers, and execution signals',
      'Organizations building a repeatable operating rhythm across internal teams',
    ],
    faq: [
      {
        question: 'Is Asystence a work OS or a task management app?',
        answer:
          'Asystence includes task management, but the broader product story is a work OS for tasks, team communication, workspace collaboration, reporting, reviews, OKRs, and AI-assisted operational visibility.',
      },
      {
        question: 'How does AI improve work management in Asystence?',
        answer:
          'AI helps teams understand workspace health, summarize activity, surface risk signals, and provide coaching context around real work activity.',
      },
      {
        question: 'Which teams are a strong fit?',
        answer:
          'It is most relevant for teams evaluating unified work management software instead of another isolated task, chat, or reporting tool.',
      },
    ],
    related: [
      '/features/task-management',
      '/features/project-management-with-chat',
      '/features/operations-work-management',
      '/features/ai-work-assistant',
      '/solutions/operations',
      '/solutions/remote-teams',
    ],
  },
  '/features/task-management': {
    path: '/features/task-management',
    navLabel: 'Task management',
    eyebrow: 'Task management with collaboration',
    title: 'Task management software with team collaboration built around execution.',
    intro:
      'Asystence helps teams plan tasks, manage sprint boards, track ownership, surface blockers, and connect task execution with communication, workspaces, and AI-assisted context.',
    seo: {
      title: 'Task Management Software with Team Collaboration | Asystence',
      description:
        'Manage tasks, subtasks, sprint boards, owners, blockers, and project execution in a workspace with team communication and AI-assisted visibility.',
    },
    highlights: [
      ['Clear ownership', 'Tasks, subtasks, owners, comments, and status changes give teams a concrete record of what needs to happen next.'],
      ['Delivery views for projects', 'Sprint boards, custom workflows, project health, and blocker visibility support day-to-day project execution.'],
      ['Connected follow-through', 'Task progress stays close to conversations, workspace context, reporting, attendance, reviews, and AI-assisted signals.'],
    ],
    sections: [
      ['Organize the work', 'Break projects into tasks and subtasks, assign owners, track progress, and keep important details attached to the work item.'],
      ['Make blockers visible', 'Use project health, workflow status, and team context to see where execution is stuck before the task list becomes stale.'],
      ['Connect tasks to communication', 'Keep project conversations, mentions, huddles, and updates close to the tasks they affect so teams do not lose decisions.'],
    ],
    decisionTitle: 'What buyers should expect from task management with team collaboration.',
    decisionPoints: [
      ['More than a checklist', 'The task layer should connect ownership, workflow, discussion, blockers, and reporting.'],
      ['Useful for managers and contributors', 'Contributors need clarity on next actions; managers need visibility into progress, risk, and accountability.'],
      ['Designed for team execution', 'Task data is most useful when it connects to the workspace where teams actually coordinate work.'],
    ],
    useCases: [
      'Teams that need project management with chat and workspace collaboration',
      'Managers tracking ownership, blockers, deadlines, and delivery rhythm',
      'Organizations standardizing task execution across departments',
    ],
    faq: [
      {
        question: 'Does Asystence support task management with team chat?',
        answer:
          'Yes. Asystence combines task and project execution with team communication surfaces such as channels, direct messages, mentions, and huddles.',
      },
      {
        question: 'How is this different from a simple to-do list?',
        answer:
          'Asystence is built for team execution, so tasks connect with projects, workspace context, communication, reporting, and AI-assisted operational visibility.',
      },
      {
        question: 'Can managers use Asystence to track blockers?',
        answer:
          'Yes. The product positioning includes project health, blocker visibility, owners, workflows, reports, and workspace intelligence for managers.',
      },
    ],
    related: [
      '/features/work-management',
      '/features/project-management-with-chat',
      '/features/team-communication',
      '/features/team-collaboration-software',
      '/features/workspaces',
      '/solutions/operations',
    ],
  },
  '/features/team-communication': {
    path: '/features/team-communication',
    navLabel: 'Team communication',
    eyebrow: 'Team communication platform',
    title: 'Team communication software for work execution, not disconnected chatter.',
    intro:
      'Asystence keeps channels, direct messages, mentions, huddles, updates, and project context inside the workspace where tasks and operations are managed.',
    seo: {
      title: 'Team Communication Platform for Work Execution | Asystence',
      description:
        'Use Asystence for team communication with channels, direct messages, mentions, huddles, tasks, projects, and workspace context in one platform.',
    },
    highlights: [
      ['Communication in context', 'Channels, direct messages, mentions, and huddles sit beside the projects, tasks, and operational records they affect.'],
      ['Fewer handoff gaps', 'Teams can discuss work and act on it without splitting decisions from task ownership and project delivery.'],
      ['Shared workspace memory', 'Communication, knowledge, project updates, and AI-assisted summaries help teams keep track of what changed.'],
    ],
    sections: [
      ['Coordinate daily work', 'Discuss priorities, ask questions, mention teammates, and run huddles inside the same workspace used for execution.'],
      ['Tie conversations to action', 'Keep updates connected to ownership, blockers, workflow status, and the broader workspace signals managers need.'],
      ['Reduce chat-tool drift', 'When communication lives away from the work, decisions get buried. Asystence keeps communication close to tasks and projects.'],
    ],
    decisionTitle: 'When team communication needs to be part of the work platform.',
    decisionPoints: [
      ['Project decisions need a home', 'Important decisions should be close to the tasks, projects, and owners they affect.'],
      ['Managers need signal, not noise', 'A communication platform becomes more useful when it connects to execution, blockers, and operational context.'],
      ['Teams need fewer disconnected loops', 'Channels and huddles are stronger when the next action can happen in the same workspace.'],
    ],
    useCases: [
      'Teams that want project management with team chat',
      'Departments coordinating decisions, blockers, handoffs, and follow-up',
      'Organizations reducing context loss between chat and task tools',
    ],
    faq: [
      {
        question: 'Can Asystence replace a separate team chat tool?',
        answer:
          'Asystence includes team communication features such as channels, direct messages, mentions, and huddles as part of a wider work management workspace.',
      },
      {
        question: 'Why connect communication to task management?',
        answer:
          'When communication and task management live together, teams can turn decisions into ownership, follow-up, and project progress with less context switching.',
      },
      {
        question: 'Is this only for managers?',
        answer:
          'No. Contributors get focused communication and task context, while managers get better visibility into coordination, blockers, and delivery signals.',
      },
    ],
    related: [
      '/features/task-management',
      '/features/project-management-with-chat',
      '/features/team-collaboration-software',
      '/features/workspaces',
      '/solutions/remote-teams',
      '/solutions/operations',
    ],
  },
  '/features/ai-work-assistant': {
    path: '/features/ai-work-assistant',
    navLabel: 'AI work assistant',
    eyebrow: 'AI assistant for work management',
    title: 'AI assistant for work management, follow-through, and team coordination.',
    intro:
      'Asystence uses AI-assisted summaries, coaching nudges, workspace health signals, and operational context to help teams understand what changed, what is blocked, and what needs attention.',
    seo: {
      title: 'AI Assistant for Work Management | Asystence',
      description:
        'Use an AI assistant for work management with summaries, workspace health, coaching nudges, risk signals, and operational context inside Asystence.',
    },
    highlights: [
      ['Workspace summaries', 'AI helps turn workspace activity into readable summaries and next-step context for managers and teams.'],
      ['Operational signals', 'Risk, performance, attendance, and project execution signals can be surfaced from the workspace.'],
      ['Guidance inside the workflow', 'AI support is connected to work management rather than isolated in a generic chatbot experience.'],
    ],
    sections: [
      ['Summarize what changed', 'Help teams and managers quickly understand progress, blockers, and follow-up across workspace activity.'],
      ['Support prioritization', 'Workspace health, risk signals, and coaching nudges help teams see where attention may be needed next.'],
      ['Keep AI grounded in team work', 'AI-assisted views draw from the workspace experience across tasks, teams, projects, reviews, attendance, and operations.'],
    ],
    decisionTitle: 'What makes an AI work assistant useful for teams.',
    decisionPoints: [
      ['It should understand work context', 'The value is not a detached chat window; it is help around tasks, projects, team activity, and operating signals.'],
      ['It should improve follow-through', 'Summaries and nudges are useful when they help teams notice stalled work, unresolved decisions, and unclear ownership.'],
      ['It should support managers and contributors', 'Managers need visibility; contributors need clarity. AI should support both without changing the work flow.'],
    ],
    useCases: [
      'Managers reviewing workspace health and execution risk',
      'Teams that need summaries across tasks, conversations, and updates',
      'Organizations adding AI to internal operations without another disconnected tool',
    ],
    faq: [
      {
        question: 'Is Asystence only an AI chatbot?',
        answer:
          'No. AI is part of the broader workspace operating system, supporting summaries, health signals, coaching context, and work management visibility.',
      },
      {
        question: 'What does the AI assistant help with?',
        answer:
          'It helps with operational context such as summaries, risk signals, workspace health, coaching nudges, and execution visibility.',
      },
      {
        question: 'Can AI help teams with follow-through?',
        answer:
          'Yes. Asystence positions AI around summaries, health context, and signals that help teams understand what needs attention.',
      },
    ],
    related: [
      '/features/work-management',
      '/features/operations-work-management',
      '/features/task-management',
      '/features/team-communication',
      '/solutions/operations',
      '/solutions/remote-teams',
    ],
  },
  '/features/workspaces': {
    path: '/features/workspaces',
    navLabel: 'Workspaces',
    eyebrow: 'Workspace management software',
    title: 'Workspace management software for teams, projects, and internal operations.',
    intro:
      'Asystence gives teams a shared workspace for task execution, team communication, knowledge, attendance, reviews, OKRs, reporting, and AI-assisted operational context.',
    seo: {
      title: 'Workspace Management Software for Teams | Asystence',
      description:
        'Create team workspaces for projects, task management, communication, knowledge, attendance, reviews, OKRs, reporting, and AI-assisted operations.',
    },
    highlights: [
      ['Shared team operating space', 'Workspaces bring people, projects, communication, knowledge, and admin visibility into one environment.'],
      ['Admin-ready structure', 'Roles, workspace controls, reporting, attendance, billing, and enterprise settings support organized operations.'],
      ['Room to grow', 'Teams can start with core work management and expand into AI intelligence, reviews, OKRs, integrations, and automation.'],
    ],
    sections: [
      ['Create a focused team hub', 'Set up a workspace, invite teammates, and coordinate project work without scattering the operating model.'],
      ['Keep knowledge and work together', 'Use wiki spaces, project records, comments, and updates to preserve context where teams already work.'],
      ['Support internal governance', 'Admin controls, reports, attendance, reviews, OKRs, and workspace intelligence help teams operate with clarity.'],
    ],
    decisionTitle: 'Why workspace management matters for growing teams.',
    decisionPoints: [
      ['Team context needs structure', 'A workspace gives people, projects, communication, knowledge, and reporting a shared home.'],
      ['Operations need visibility', 'Admins and managers need to see activity, ownership, attendance, and workspace health without switching systems.'],
      ['Collaboration needs a durable place', 'Work should not depend on scattered messages or isolated task lists when teams grow.'],
    ],
    useCases: [
      'Teams building a central workspace for internal collaboration',
      'Operations leaders standardizing team execution and visibility',
      'Organizations consolidating work, communication, and workspace administration',
    ],
    faq: [
      {
        question: 'What is a workspace in Asystence?',
        answer:
          'A workspace is the shared environment where a team manages projects, tasks, communication, knowledge, attendance, reporting, and operational context.',
      },
      {
        question: 'How is workspace management different from project management?',
        answer:
          'Project management focuses on delivery. Workspace management also organizes people, communication, knowledge, operations, reporting, and administration around that delivery.',
      },
      {
        question: 'Can teams start small and expand later?',
        answer:
          'Yes. The landing site describes a Basic plan for getting started, with paid options for AI intelligence, reviews, OKRs, and automation.',
      },
    ],
    related: [
      '/features/work-management',
      '/features/team-collaboration-software',
      '/features/operations-work-management',
      '/features/team-communication',
      '/solutions/operations',
      '/solutions/remote-teams',
    ],
  },
  '/features/project-management-with-chat': {
    path: '/features/project-management-with-chat',
    navLabel: 'Project management with chat',
    eyebrow: 'Project management with team chat',
    title: 'Project management with team chat for teams that need decisions next to delivery.',
    intro:
      'Asystence connects project boards, task ownership, blockers, channels, direct messages, mentions, and huddles so project communication can stay tied to execution.',
    seo: {
      title: 'Project Management with Team Chat | Asystence',
      description:
        'Manage projects, tasks, blockers, team chat, channels, direct messages, mentions, and huddles in one workspace with Asystence.',
    },
    highlights: [
      ['Projects and chat together', 'Project work and team conversations live in the same workspace instead of moving between separate tools.'],
      ['Decisions stay actionable', 'Mentions, huddles, comments, owners, and blockers keep project discussion close to the next step.'],
      ['Managers see the work behind updates', 'Project health, task ownership, and workspace context give managers more than status messages.'],
    ],
    sections: [
      ['Move from discussion to ownership', 'Turn project conversations into assigned tasks, visible blockers, and tracked work without losing the context of the conversation.'],
      ['Keep channels connected to projects', 'Use team communication surfaces alongside project execution so handoffs and updates stay visible.'],
      ['Support delivery reviews', 'Use project health, reporting, reviews, and AI-assisted summaries to understand what happened across the project cycle.'],
    ],
    decisionTitle: 'When project management needs built-in team chat.',
    decisionPoints: [
      ['Decisions are part of delivery', 'If decisions happen in chat but execution lives elsewhere, teams lose context and accountability.'],
      ['Chat should not bury blockers', 'Project communication is more useful when blockers, owners, and next steps are visible.'],
      ['Projects need an operating layer', 'Tasks, channels, huddles, reports, and workspace context work better together than as disconnected systems.'],
    ],
    useCases: [
      'Teams evaluating project management software with built-in chat',
      'Managers who want project updates and actual execution data together',
      'Internal teams coordinating delivery across tasks, channels, and huddles',
    ],
    faq: [
      {
        question: 'Can Asystence combine project management and team chat?',
        answer:
          'Yes. Asystence brings project execution, task ownership, channels, direct messages, mentions, and huddles into the same workspace.',
      },
      {
        question: 'Why not keep project management and chat separate?',
        answer:
          'Separate tools can split decisions from execution. A connected workspace keeps discussion, ownership, blockers, and follow-through closer together.',
      },
      {
        question: 'How is this different from task management?',
        answer:
          'Task management focuses on assigned work. Project management with chat focuses on delivery coordination, project decisions, and team communication in one platform.',
      },
    ],
    related: [
      '/features/task-management',
      '/features/team-communication',
      '/features/team-collaboration-software',
      '/features/work-management',
      '/solutions/remote-teams',
      '/solutions/operations',
    ],
  },
  '/features/team-collaboration-software': {
    path: '/features/team-collaboration-software',
    navLabel: 'Team collaboration',
    eyebrow: 'Team collaboration software',
    title: 'Team collaboration software for tasks, communication, and shared workspace context.',
    intro:
      'Asystence helps teams collaborate around the actual work: tasks, projects, conversations, knowledge, updates, and operational signals in one focused workspace.',
    seo: {
      title: 'Team Collaboration Software for Work Execution | Asystence',
      description:
        'Use Asystence as team collaboration software for tasks, projects, communication, knowledge, workspace context, and AI-assisted execution visibility.',
    },
    highlights: [
      ['Collaboration around work', 'Tasks, project updates, chat, wiki knowledge, and workspace context give collaboration a durable place.'],
      ['Less fragmented coordination', 'Teams can plan, discuss, document, and follow up without splitting the operating rhythm across tools.'],
      ['Shared visibility', 'Managers and contributors can see work progress, context, and operational signals from the same workspace.'],
    ],
    sections: [
      ['Work together with context', 'Keep project records, comments, communication, knowledge, and task ownership connected in one workspace.'],
      ['Coordinate cross-functional handoffs', 'Use channels, direct messages, huddles, task owners, and workspace signals to keep handoffs visible.'],
      ['Preserve knowledge while moving fast', 'Wiki spaces, updates, project context, and AI-assisted summaries help teams avoid losing important information.'],
    ],
    decisionTitle: 'What to look for in team collaboration software.',
    decisionPoints: [
      ['Collaboration should create follow-through', 'Discussion is useful when it connects to tasks, decisions, owners, and project progress.'],
      ['Knowledge should stay near execution', 'Documentation and updates are easier to use when they live in the workspace where teams already work.'],
      ['Visibility should include the operating layer', 'Collaboration is not only messages; it also includes accountability, blockers, reviews, and team signals.'],
    ],
    useCases: [
      'Teams consolidating chat, task tracking, project context, and knowledge',
      'Remote or hybrid teams that need a shared coordination layer',
      'Managers improving visibility without adding another status-report tool',
    ],
    faq: [
      {
        question: 'What makes Asystence team collaboration software?',
        answer:
          'Asystence combines task management, team communication, workspace collaboration, wiki knowledge, project execution, and AI-assisted visibility in one platform.',
      },
      {
        question: 'Is team collaboration different from team communication?',
        answer:
          'Yes. Communication is the conversation layer. Collaboration also includes tasks, ownership, knowledge, projects, handoffs, and follow-through.',
      },
      {
        question: 'How does collaboration connect to project and operations work?',
        answer:
          'Collaboration is most useful when it connects to project management with chat, workspaces, and operations work management.',
      },
    ],
    related: [
      '/features/team-communication',
      '/features/project-management-with-chat',
      '/features/workspaces',
      '/features/task-management',
      '/solutions/remote-teams',
      '/solutions/operations',
    ],
  },
  '/features/operations-work-management': {
    path: '/features/operations-work-management',
    navLabel: 'Operations work management',
    eyebrow: 'Operations work management',
    title: 'Operations work management software for teams coordinating internal execution.',
    intro:
      'Asystence gives operations-heavy teams a workspace for recurring work, project follow-through, communication, attendance, reviews, OKRs, reporting, and AI-assisted visibility.',
    seo: {
      title: 'Operations Work Management Software | Asystence',
      description:
        'Coordinate operations work with tasks, projects, team communication, workspaces, attendance, reviews, OKRs, reporting, and AI-assisted visibility.',
    },
    highlights: [
      ['Recurring work with ownership', 'Track operational tasks, projects, handoffs, and blockers with clear owners and shared visibility.'],
      ['Communication tied to execution', 'Keep operational updates, channels, direct messages, mentions, and huddles close to the work they affect.'],
      ['Signals for managers', 'Attendance, reviews, OKRs, reports, workspace health, and AI-assisted context help leaders see operating friction.'],
    ],
    sections: [
      ['Run internal operating rhythms', 'Coordinate repeated workflows, follow-up items, project delivery, and team accountability inside one workspace.'],
      ['Connect operations and communication', 'Operations work often depends on updates and handoffs. Asystence keeps those conversations near tasks and projects.'],
      ['See execution quality', 'Use reporting, reviews, OKRs, attendance context, and AI-assisted summaries to understand how work is moving.'],
    ],
    decisionTitle: 'Where operations teams get value from a unified work platform.',
    decisionPoints: [
      ['Operational work is cross-functional', 'A single workspace helps teams coordinate across projects, people, updates, and recurring processes.'],
      ['Visibility needs context', 'Reports are more useful when they connect to the tasks, conversations, and signals behind the work.'],
      ['AI needs operating data', 'AI-assisted context becomes more useful when work, communication, and management signals live together.'],
    ],
    useCases: [
      'Operations managers coordinating recurring work and internal projects',
      'Teams tracking tasks, updates, attendance, reviews, and reporting together',
      'Organizations replacing fragmented coordination with one work OS',
    ],
    faq: [
      {
        question: 'What is operations work management?',
        answer:
          'Operations work management coordinates recurring internal work, projects, ownership, communication, reporting, and team visibility in one operating layer.',
      },
      {
        question: 'How does operations work management support operations teams?',
        answer:
          'It gives operations teams a product layer for recurring work, ownership, communication, reporting, reviews, OKRs, and AI-assisted visibility.',
      },
      {
        question: 'Does Asystence support operations-heavy teams?',
        answer:
          'Yes. The product story includes tasks, communication, attendance, reporting, reviews, OKRs, workspace intelligence, and admin visibility.',
      },
    ],
    related: [
      '/solutions/operations',
      '/features/work-management',
      '/features/workspaces',
      '/features/ai-work-assistant',
      '/features/team-communication',
      '/solutions/remote-teams',
    ],
  },
  '/solutions/operations': {
    path: '/solutions/operations',
    navLabel: 'Operations',
    eyebrow: 'Operations teams',
    title: 'Internal operations software for teams that need execution visibility.',
    intro:
      'Asystence helps operations-focused teams coordinate projects, tasks, communication, attendance, performance rhythms, and AI-assisted workspace intelligence from one platform.',
    seo: {
      title: 'Internal Operations Software for Teams | Asystence',
      description:
        'Coordinate internal operations with task management, project execution, team communication, attendance, reviews, OKRs, reporting, and AI-assisted visibility.',
    },
    highlights: [
      ['Operational clarity', 'Track work, ownership, blockers, attendance, reviews, and workspace health in one system.'],
      ['Cross-functional coordination', 'Keep projects, communication, wiki knowledge, and execution updates visible across internal teams.'],
      ['AI-assisted management context', 'Use summaries, risk signals, coaching nudges, and health views to understand where attention is needed.'],
    ],
    sections: [
      ['Run the operating rhythm', 'Bring recurring coordination, project follow-through, team accountability, and management visibility into a shared workspace.'],
      ['Reduce context loss', 'Keep decisions, tasks, updates, and team communication tied to the workspace where the work is managed.'],
      ['See the signals behind execution', 'Combine reporting, attendance, reviews, OKRs, and AI-assisted context for a clearer operational picture.'],
    ],
    decisionTitle: 'How operations teams evaluate a work OS.',
    decisionPoints: [
      ['Can the team see ownership and blockers?', 'Operations leaders need more than chat updates. They need visible work, responsibilities, and stalled items.'],
      ['Does communication stay connected?', 'Operational decisions lose value when they are separated from tasks, projects, and workspace context.'],
      ['Does the platform support management rhythms?', 'Reviews, OKRs, attendance, reporting, and AI-assisted summaries help teams operate with more consistency.'],
    ],
    useCases: [
      'Operations leaders managing internal execution across teams',
      'Managers coordinating tasks, chat, attendance, reviews, and reporting',
      'Organizations that want a unified workspace instead of disconnected point tools',
    ],
    faq: [
      {
        question: 'What operations work does Asystence support?',
        answer:
          'Asystence supports internal coordination across tasks, projects, team communication, attendance, reporting, reviews, OKRs, knowledge, and AI-assisted workspace visibility.',
      },
      {
        question: 'Is Asystence only for operations teams?',
        answer:
          'No. Operations is one strong use case, but the platform also supports project teams, remote teams, managers, contributors, and growing workspaces.',
      },
      {
        question: 'Why would operations teams need team communication in the same platform?',
        answer:
          'Operations work depends on handoffs, decisions, and follow-through. Keeping communication near tasks and projects reduces context loss.',
      },
    ],
    related: [
      '/features/operations-work-management',
      '/features/work-management',
      '/features/workspaces',
      '/features/ai-work-assistant',
      '/features/team-communication',
      '/features/project-management-with-chat',
    ],
  },
  '/solutions/remote-teams': {
    path: '/solutions/remote-teams',
    navLabel: 'Remote teams',
    eyebrow: 'Remote team work OS',
    title: 'Work OS for remote teams that need tasks, communication, and visibility in one place.',
    intro:
      'Asystence helps remote and distributed teams coordinate tasks, project updates, team communication, workspace knowledge, attendance context, and AI-assisted summaries without relying on scattered tools.',
    seo: {
      title: 'Work OS for Remote Teams | Asystence',
      description:
        'Give remote teams one workspace for task management, team communication, project updates, knowledge, handoffs, attendance context, and AI-assisted visibility.',
    },
    highlights: [
      ['Shared source of work context', 'Remote teams can keep tasks, updates, conversations, and workspace knowledge in one operating layer.'],
      ['Clear async handoffs', 'Owners, blockers, project status, channels, mentions, and huddles help distributed teams understand what changed.'],
      ['Management visibility without extra rituals', 'Reports, attendance context, reviews, OKRs, and AI-assisted summaries help managers see execution signals.'],
    ],
    sections: [
      ['Coordinate across locations', 'Use tasks, projects, channels, direct messages, mentions, and huddles to keep distributed teammates aligned.'],
      ['Preserve async context', 'Keep project decisions, wiki knowledge, comments, updates, and AI-assisted summaries available for teammates in different schedules.'],
      ['Make remote work visible', 'Use workspace health, reporting, attendance context, reviews, and OKRs to understand execution without relying only on meetings.'],
    ],
    decisionTitle: 'What remote teams need from work management software.',
    decisionPoints: [
      ['Async work needs durable context', 'Remote teams need project updates, task status, and decisions to remain visible after the conversation ends.'],
      ['Communication needs follow-through', 'Channels and huddles are more useful when next actions can become tracked work in the same workspace.'],
      ['Managers need signal without micromanagement', 'Workspace visibility, reports, and AI-assisted summaries help leaders understand progress while teams keep moving.'],
    ],
    useCases: [
      'Distributed teams replacing scattered task, chat, and documentation tools',
      'Managers coordinating remote project delivery and async handoffs',
      'Teams that need one workspace for communication, tasks, and operational visibility',
    ],
    faq: [
      {
        question: 'Is Asystence suitable for remote teams?',
        answer:
          'Yes. Asystence supports remote coordination through task management, team communication, workspace knowledge, huddles, reporting, attendance context, and AI-assisted summaries.',
      },
      {
        question: 'How does Asystence help async teams?',
        answer:
          'It keeps tasks, owners, updates, knowledge, conversations, and summaries in one workspace so teammates can understand context without chasing separate tools.',
      },
      {
        question: 'Can remote teams use Asystence for project management with chat?',
        answer:
          'Yes. Project execution and team communication are connected, so remote teams can coordinate work and discussion in the same platform.',
      },
    ],
    related: [
      '/features/team-collaboration-software',
      '/features/project-management-with-chat',
      '/features/team-communication',
      '/features/workspaces',
      '/features/work-management',
      '/features/ai-work-assistant',
    ],
  },
}

export const MARKETING_PAGE_LIST = Object.values(MARKETING_PAGES)

export function getMarketingPage(path) {
  return MARKETING_PAGES[path]
}

export function getRelatedPages(page) {
  return (page.related || []).map((path) => MARKETING_PAGES[path]).filter(Boolean)
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Asystence',
  url: SITE_URL,
  logo: absoluteUrl('/asystence-logo.png'),
  email: 'hello@asystence.com',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Asystence',
  url: SITE_URL,
  description: HOME_SEO.description,
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Asystence',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Intelligent workspace platform',
  operatingSystem: 'Web, Windows, Android',
  url: SITE_URL,
  description: HOME_SEO.description,
  featureList: [
    'Project management',
    'Task management',
    'Team communication',
    'Workspace collaboration',
    'AI assistance',
    'Workspace intelligence',
    'Attendance and availability intelligence',
    'Operational intelligence',
    'Reviews and OKRs',
  ],
}

function faqJsonLd(items = []) {
  if (!items.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

function breadcrumbJsonLd(page) {
  const parentName = page.path.startsWith('/solutions') ? 'Solutions' : 'Features'
  const parentPath = page.path.startsWith('/solutions') ? '/solutions' : '/features'

  return {
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
        name: parentName,
        item: absoluteUrl(parentPath),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.navLabel,
        item: absoluteUrl(page.path),
      },
    ],
  }
}

export function buildHomeJsonLd() {
  return [organizationJsonLd, websiteJsonLd, softwareJsonLd, faqJsonLd(HOME_FAQS)]
}

export function buildMarketingPageJsonLd(page) {
  return [
    organizationJsonLd,
    softwareJsonLd,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.seo.title,
      url: absoluteUrl(page.path),
      description: page.seo.description,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Asystence',
        url: SITE_URL,
      },
      about: {
        '@type': 'SoftwareApplication',
        name: 'Asystence',
        applicationCategory: 'BusinessApplication',
      },
    },
    breadcrumbJsonLd(page),
    faqJsonLd(page.faq),
  ]
}

export function buildPolicyJsonLd(path, page) {
  return [
    organizationJsonLd,
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${page.title} | Asystence`,
      url: absoluteUrl(path),
      description: page.intro,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Asystence',
        url: SITE_URL,
      },
    },
  ]
}
