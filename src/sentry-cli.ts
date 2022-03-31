// Options used commonly
const OPTION_HELP: Fig.Option = {
  name: ["--help", "-h"],
  description: "Prints help information",
};

const OPTION_JSON: Fig.Option = {
  name: "--json",
  description: "Format outputs as JSON",
};

const OPTION_LEVEL: Fig.Option = {
  name: "--log-level",
  description: "Set the log output verbosity",
  args: {
    name: "log level",
    suggestions: ["trace", "debug", "info", "warn", "error"],
  },
};

const OPTION_VERSION: Fig.Option = {
  name: ["--version", "-V"],
  description: "Prints version information",
};

const completionSpec: Fig.Spec = {
  name: "sentry-cli",
  description: "Command line utility for Sentry",
  subcommands: [
    {
      name: "bash-hook",
      description: "Prints out a bash script that does error handling",
      options: [
        OPTION_HELP,
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
          name: "bundle-sources",
          description:
            "Create a source bundle for a given debug information file",
          options: [
            OPTION_HELP,
            OPTION_LEVEL,
            {
              name: ["--output", "-o"],
              description:
                "The path to the output folder.  If not provided the file is placed next to the input file",
            },
            OPTION_VERSION,
          ],
          args: {
            name: "paths",
            description: "The path to the input debug info files",
            template: "filepaths",
          },
        },
        {
          name: "check",
          description: "Check the debug info file at a given path",
          options: [
            OPTION_HELP,
            OPTION_LEVEL,
            OPTION_JSON,
            {
              name: ["--type", "-t"],
              description:
                "Explicitly set the type of the debug info file. This should not be needed as files are auto detected. [possible values: dsym, elf, proguard, breakpad]",
              args: {
                name: "type",
                suggestions: ["dsym", "elf", "proguard", "breakpad"],
              },
            },
            OPTION_VERSION,
          ],
          args: {
            name: "path",
            description: "The path to the debug info file",
            template: "filepaths",
          },
        },
        {
          name: "find",
          description:
            "Locate debug information files for given debug identifiers",
          options: [
            OPTION_HELP,
            OPTION_JSON,
            OPTION_LEVEL,
            {
              name: "--no-cwd",
              description:
                "Do not look for debug symbols in the current working directory",
            },
            {
              name: "--no-well-known",
              description:
                "Do not look for debug symbols in well known locations",
            },
            {
              name: ["--path", "-p"],
              description:
                "Add a path to search recursively for debug info files",
            },
            {
              name: ["--type", "-t"],
              description:
                "Only consider debug information files of the given type.  By default all types are considered",
              args: {
                name: "type",
                suggestions: [
                  "dsym",
                  "elf",
                  "pe",
                  "pdb",
                  "proguard",
                  "breakpad",
                  "sourcebundle",
                ],
              },
            },
            OPTION_VERSION,
          ],
          args: {
            name: "ID",
            description: "The debug identifiers of the files to search for",
          },
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
      ],
      options: [OPTION_HELP, OPTION_LEVEL],
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
