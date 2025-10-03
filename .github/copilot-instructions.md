# Custom GitHub Copilot Prompts
# Place your custom Copilot prompt instructions below. These will be used by Copilot to guide code suggestions for this project.

# Example:
# - Always use tab indentation.
# - Use CRLF for line endings.
# - Prefer functional components in Vue.js.
# - Use JavaScript (not TypeScript) unless otherwise specified.
# - Write concise, well-documented code.

# Add your own prompts below:
Examine the README file and the User Interface Specification file for context, but don't implement anything in them unless explicitly ask to.

Do not commit unless specifically told to. Prepend "Copilot: " to all Git commit messages. Always do a Git push after a commit.

Always run 'npm run format', 'npm run lint' and 'npm run build' before committing code. If there are any linting or build errors, fix them before committing.
