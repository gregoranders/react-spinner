# [Code Climate][code-climate-url] on localhost via [docker][code-climate-docker-url]

[Home](../README.md)

[Code Climate Configuration][code-climate-configuration-url]

| Image                                | Size   |
| :----------------------------------- | -----: |
| codeclimate/codeclimate-eslint       |  495MB |
| codeclimate/codeclimate              |  102MB |
| codeclimate/codeclimate-structure    | 5.63GB |
| codeclimate/codeclimate-duplication  | 5.63GB |
| codeclimate/codeclimate-scss-lint    |  107MB |
| codeclimate/codeclimate-markdownlint |  392MB |
| codeclimate/codeclimate-editorconfig | 74.1MB |
| codeclimate/codeclimate-sass-lint    |  180MB |
| codeclimate/codeclimate-nodesecurity |  146MB |
| codeclimate/codeclimate-fixme        | 58.8MB |
| codeclimate/codeclimate-git-legal    |  373MB |

## Setup

<!-- markdownlint-disable MD013 -->
```sh
docker pull codeclimate/codeclimate
docker run --rm --volume /var/run/docker.sock:/var/run/docker.sock --env CODECLIMATE_CODE="$(pwd)" --volume "$(pwd)":/code --volume /tmp/cc:/tmp/cc codeclimate/codeclimate engines:install
```
<!-- markdownlint-enable MD013 -->

## Script for Code Climate

```sh
#!/usr/bin/env sh

CODE_DIRECTORY=$(pwd)

docker run \
  --interactive \
  --tty \
  --rm \
  --env CODECLIMATE_CODE="${CODE_DIRECTORY}" \
  --volume "${CODE_DIRECTORY}":/code \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /tmp/cc:/tmp/cc \
  codeclimate/codeclimate $@

# vim: tw=78 ft=sh ts=2 sw=2 sts=2 nu:

```

## Analyze code

```sh
 [script above] analyze
```

or

```sh
 npm run codeclimate
```

[code-climate-url]: https://codeclimate.com
[code-climate-docker-url]: https://hub.docker.com/r/codeclimate/codeclimate
[code-climate-configuration-url]: https://docs.codeclimate.com/docs/advanced-configuration
