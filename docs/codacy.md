# [Codacy][codacy-url] on localhost via [docker][codacy-docker-url]

[Home](../README.md)

[Codacy Configuration][codacy-configuration-url]

| Image                                | Size   |
| :----------------------------------- | -----: |
| codacy/codacy-analysis-cli           |  414MB |
| codacy-eslint                        | 1.02GB |
| codacy-analysis-cli                  |  414MB |
| codacy-metrics-eslint                |  216MB |
| codacy-metrics-cloc                  |  372MB |
| codacy-tslint                        |  238MB |
| codacy-duplication-jscpd             |   85MB |

## Setup

```sh
docker pull codacy/codacy-analysis-cli
```

### Script for Codacy

```sh
#!/usr/bin/env sh

CODE_DIRECTORY=$(pwd)

docker run \
  --interactive \
  --tty \
  --rm \
  --env CODACY_CODE="${CODE_DIRECTORY}" \
  --volume "${CODE_DIRECTORY}":"${CODE_DIRECTORY}" \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /tmp:/tmp \
  codacy/codacy-analysis-cli $@

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:

```

### Analyze code

```sh
 [script above] analyze --directory "$(pwd)"
```

or

```sh
 npm run codacy
```

[codacy-url]: https://codacy.com
[codacy-docker-url]: https://hub.docker.com/r/codacy/codacy-analysis-cli
[codacy-configuration-url]: https://docs.codacy.com
