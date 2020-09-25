CHANGELOG
=========

## HEAD (Unreleased)

Breaking changes:
- Resolved an issue when some output properties were erroneously presented as input properties too
(notable example: `tier` in `sku` of a `storage.StorageAccount`)

New features:
- Added `appplatform.getResourceUploadUrl` and other `get*` POST-based invokes ([#11](https://github.com/pulumi/pulumi-azure-nextgen/issues/11))

Bug fixes:
- Fixed handling of `@odata.type` fields ([#18](https://github.com/pulumi/pulumi-azure-nextgen/issues/18))

---

## 0.1.0 (2020-09-21)

The first beta release of the next generation Azure Provider is out!
