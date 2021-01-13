CHANGELOG
=========

## HEAD (Unreleased)

Features:

- Respect default values as Azure API specs define ([#183](https://github.com/pulumi/pulumi-azure-nextgen/issues/183))
- GetClientToken invoke to retrieve an OAuth token for the current auth context ([#207](https://github.com/pulumi/pulumi-azure-nextgen/issues/207))

Fixes:

- Generate all types along inheritance hierachy, not just one level ([#186](https://github.com/pulumi/pulumi-azure-nextgen/issues/186))

---

## 0.4.0 (2021-01-05)

Breaking changes:

- `int64` types are now represented as numbers (e.g., `double` in .NET) instead of `int`
- Nested union types replaced with `object` in C# ([#19](https://github.com/pulumi/pulumi-azure-nextgen/issues/19))

New invokes:

- `getClientConfig` to retrieve current authorization context parameters ([#107](https://github.com/pulumi/pulumi-azure-nextgen/issues/107))

Fixes:

- Improved experience with enum collections ([#173](https://github.com/pulumi/pulumi-azure-nextgen/issues/173))
- Correct unknown propagation during preview ([#115](https://github.com/pulumi/pulumi-azure-nextgen/issues/115))
- Importing IotHubResource ([#176](https://github.com/pulumi/pulumi-azure-nextgen/issues/176))
- Add `subscriptionId` as an explicit SDK parameter where API declares it as a method param ([#101](https://github.com/pulumi/pulumi-azure-nextgen/issues/101)

## 0.3.1 (2020-12-18)

New Features:

- Descriptions for resources on "latest" include a reference to the actual API version

New resources:

- API Management ProductApi, ProductGroup, GroupUser and other "link" resources ([#92](https://github.com/pulumi/pulumi-azure-nextgen/issues/92))

Fixes:

- Secrets leak in state ([#185](https://github.com/pulumi/pulumi-azure-nextgen/issues/185))
- Propogate expected value for constant properties in description ([#180](https://github.com/pulumi/pulumi-azure-nextgen/issues/180))

## 0.3.0 (2020-12-11)

New features:

- Enum support ([#106](https://github.com/pulumi/pulumi-azure-nextgen/issues/106))

New resources:

- Azure KeyVault Secrets and Keys ([#54](https://github.com/pulumi/pulumi-azure-nextgen/issues/54))
- WebAppDiagnosticLogsConfiguration ([#157](https://github.com/pulumi/pulumi-azure-nextgen/issues/157) and [#150](https://github.com/pulumi/pulumi-azure-nextgen/issues/150))
- App Insights ComponentCurrentBillingFeature ([#158](https://github.com/pulumi/pulumi-azure-nextgen/issues/158))
- SQL GeoBackupPolicy ([#143](https://github.com/pulumi/pulumi-azure-nextgen/issues/143))

Fixes:

- Retrieve ID in get* invokes ([#48](https://github.com/pulumi/pulumi-azure-nextgen/issues/48))

## 0.2.8 (2020-11-23)

- Add `userAssignedIdentities` to several resources ([#136](https://github.com/pulumi/pulumi-azure-nextgen/issues/136))

## 0.2.7 (2020-11-14)

- Fix creation of UserAssignedIdentity ([#100](https://github.com/pulumi/pulumi-azure-nextgen/issues/100))
- Fix creation of Budget ([#122](https://github.com/pulumi/pulumi-azure-nextgen/issues/122))
- Default to 'public' Azure environment ([#133](https://github.com/pulumi/pulumi-azure-nextgen/issues/133))

## 0.2.6 (2020-11-13)

Bug fixes:

- Support non-public Azure environments ([#123](https://github.com/pulumi/pulumi-azure-nextgen/issues/123))
- Fix an error in Go SDK's first-class provider config ([#126](https://github.com/pulumi/pulumi-azure-nextgen/issues/126))

## 0.2.5 (2020-11-06)

Bug fixes:

- API Connection creation ([#102](https://github.com/pulumi/pulumi-azure-nextgen/issues/102))
- WebAppSwiftVirtualNetworkConnection creation ([#94](https://github.com/pulumi/pulumi-azure-nextgen/issues/94))
- Fix plugin acquisition - requires Pulumi CLI 2.13.0+ ([#70](https://github.com/pulumi/pulumi-azure-nextgen/issues/70))

New resources:

- Azure Event Hubs Namespace Network Rules ([#17](https://github.com/pulumi/pulumi-azure-nextgen/issues/17))
- WebApp SourceControl ([#79](https://github.com/pulumi/pulumi-azure-nextgen/issues/79))
- DBforPostgreSQL Configurations ([#80](https://github.com/pulumi/pulumi-azure-nextgen/issues/80))
- StorageAccount BlobServices ([#91](https://github.com/pulumi/pulumi-azure-nextgen/issues/91))

## 0.2.4 (2020-10-30)

- Fix Cannot create Azure SQL firewall rules ([#87](https://github.com/pulumi/pulumi-azure-nextgen/issues/87))
- Detect deleted resources on refresh ([#66](https://github.com/pulumi/pulumi-azure-nextgen/issues/66))

## 0.2.3 (2020-10-16)

- Fix refreshing resource state ([#60](https://github.com/pulumi/pulumi-azure-nextgen/issues/60))
- Update of a parent resource doesn't cause replacement of child resources using its `name` property anymore
  ([#64](https://github.com/pulumi/pulumi-azure-nextgen/issues/64))
- Fix choice-array type handling, e.g., creation of CDN endpoint with a delivery rules
  ([#68](https://github.com/pulumi/pulumi-azure-nextgen/issues/68))

## 0.2.2 (2020-10-09)

- Fix reading/importing resources with scope URL parameters (e.g., [#51](https://github.com/pulumi/pulumi-azure-nextgen/issues/51))
- Fix result types for invokes that list WebApp settings and similar ([#41](https://github.com/pulumi/pulumi-azure-nextgen/issues/41))
- Fix serialization of free-form dictionary arguments (e.g., [#58](https://github.com/pulumi/pulumi-azure-nextgen/issues/58))

## 0.2.1 (2020-10-03)

Bug fixes:

- Fix the packaging of the Go SDK

## 0.2.0 (2020-10-02)

Breaking changes:

- Resolved an issue when some output properties were erroneously presented as input properties too
(notable example: `tier` in `sku` of a `storage.StorageAccount`)

New features:

- Added `appplatform.getResourceUploadUrl` and other `get*` POST-based invokes ([#11](https://github.com/pulumi/pulumi-azure-nextgen/issues/11))
- Resource import is now supported ([#7](https://github.com/pulumi/pulumi-azure-nextgen/issues/7))

Bug fixes:

- Fixed handling of `@odata.type` fields ([#18](https://github.com/pulumi/pulumi-azure-nextgen/issues/18))
- Handle unspecified types in Open API specs more gracefully: accept an "any" type (e.g., `object` in .NET) for inputs and ignore
  them for outputs ([#14](https://github.com/pulumi/pulumi-azure-nextgen/issues/14))
- Fixed the serialization of `CompositeIndexes` property of `SqlResourceSqlContainer`
  ([#28](https://github.com/pulumi/pulumi-azure-nextgen/issues/28))
- Data Factory enum properties (e.g. `CompressionCodec`) changed to strings
  ([#29](https://github.com/pulumi/pulumi-azure-nextgen/issues/29))
- API types "object" are mapped to "any" type in Pulumi.
  Fixed [#30](https://github.com/pulumi/pulumi-azure-nextgen/issues/30) and [#32](https://github.com/pulumi/pulumi-azure-nextgen/issues/32)
- Fix serialization of multi-flattened properties [#31](https://github.com/pulumi/pulumi-azure-nextgen/issues/31)

## 0.1.0 (2020-09-21)

The first beta release of the next generation Azure Provider is out!
