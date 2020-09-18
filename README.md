[![Slack](http://www.pulumi.com/images/docs/badges/slack.svg)](https://slack.pulumi.com)
[![NPM version](https://badge.fury.io/js/%40pulumi%2Fazure%2Fnextgen.svg)](https://npmjs.com/package/@pulumi/azure-nextgen)
[![Python version](https://badge.fury.io/py/pulumi-azure-nextgen.svg)](https://pypi.org/project/pulumi-azure-nextgen)
[![NuGet version](https://badge.fury.io/nu/pulumi.azurenextgen.svg)](https://badge.fury.io/nu/pulumi.azurenextgen)
[![PkgGoDev](https://pkg.go.dev/badge/github.com/pulumi/pulumi-azure-nextgen/sdk/go)](https://pkg.go.dev/github.com/pulumi/pulumi-azure-nextgen/sdk/go)
[![License](https://img.shields.io/npm/l/%40pulumi%2Fazure%2Fnextgen.svg)](https://github.com/pulumi/pulumi-azure-nextgen/blob/master/LICENSE)

# Next Generation Microsoft Azure Resource Provider

The Next Generation Microsoft Azure resource provider for Pulumi lets you use Azure resources in your cloud programs.

To use this package, please [install the Pulumi CLI first](https://pulumi.io/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @pulumi/azure-nextgen

or `yarn`:

    $ yarn add @pulumi/azure-nextgen

### Python

To use from Python, install using `pip`:

    $ pip install pulumi_azure_nextgen

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/pulumi/pulumi-azure-nextgen/sdk/go

### .NET 

To use from .NET, install using `dotnet add package`:

    $ dotnet add package Pulumi.AzureNextGen

## Concepts

The `@pulumi/azure-nextgen` package provides a strongly-typed means to build cloud applications that create
and interact closely with Azure resources.  Resources are exposed for the entire Azure surface area,
including (but not limited to) 'compute', 'keyvault', 'network', 'storage', and more.

The Azure NextGen provider works directly with the Azure Resource Manager (ARM) platform instead of depending on a handwritten layer as with the [previous provider](https://github.com/pulumi/pulumi-azure). This approach ensures higher quality and higher fidelity with the Azure platform.

The Azure NextGen provider is currently in beta. While we try to minimize impact on users, breaking changes may be shipped in minor version updates.

## Configuring credentials

There are a variety of ways credentials may be configured for the Azure provider, appropriate for
different use cases. They are enumerated [in the quickstart guide](
https://www.pulumi.com/docs/intro/cloud-providers/azure/setup/).

## Reference

For further information, please visit the [Next Generation Azure provider announcement](https://www.pulumi.com/blog/announcing-nextgen-azure-provider/) or for detailed reference documentation, please visit [the API docs](
https://www.pulumi.com/docs/reference/pkg/azure-nextgen).
