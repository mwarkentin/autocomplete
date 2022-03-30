// Options used commonly
const OPTION_LEVEL: Fig.Option = {
  name: "--log-level",
  description: "Set the log output verbosity",
  args: {
    name: "log level",
    suggestions: ["trace", "debug", "info", "warn", "error"],
  },
};

const completionSpec: Fig.Spec = {
  name: "sentry-cli",
  description: "Command line utility for Sentry",
  subcommands: [
    {
      name: "bash-hook",
      description: "Prints out a bash script that does error handling",
      options: [
        {
          name: ["--help", "-h"],
          description: "Prints help information",
        },
        {
          name: "--cli",
          description: "Explicitly set/override the sentry-cli command",
          args: {
            name: "CMD",
          },
        },
        OPTION_LEVEL,
        {
          name: "--no-environ",
          description: "Do not send environment variables along",
        },
        {
          name: "--no-exit",
          description:
            "Do not turn on -e (exit immediately) flag automatically",
        },
      ],
    },
    {
      name: "difutil",
      description: "Locate or analyze debug information files",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'abc my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for sentry-cli",
    },
    {
      name: "--api-key",
      description: "The given Sentry API key",
      args: {
        name: "API_KEY",
      },
    },
    {
      name: "--auth-token",
      description: "Use the given Sentry auth token",
      args: {
        name: "AUTH_TOKEN",
      },
    },
    OPTION_LEVEL,
    {
      name: "--url",
      description:
        "Fully qualified URL to the Sentry server [default: https://sentry.io/]",
    },
    {
      name: ["--version", "-V"],
      description: "Print version information",
    },
  ],
};
export default completionSpec;
