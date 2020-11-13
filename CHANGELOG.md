CHANGELOG
=========

## HEAD (Unreleased)

None

---

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
