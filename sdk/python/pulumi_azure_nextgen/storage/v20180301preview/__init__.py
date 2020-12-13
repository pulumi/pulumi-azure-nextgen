# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .blob_container import *
from .blob_container_immutability_policy import *
from .get_blob_container import *
from .get_blob_container_immutability_policy import *
from .get_management_policy import *
from .get_storage_account import *
from .get_storage_account_management_policies import *
from .list_storage_account_keys import *
from .management_policy import *
from .storage_account import *
from .storage_account_management_policies import *
from ._inputs import *
from . import outputs

def _register_module():
    import pulumi
    from ... import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "azure-nextgen:storage/v20180301preview:BlobContainer":
                return BlobContainer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:storage/v20180301preview:BlobContainerImmutabilityPolicy":
                return BlobContainerImmutabilityPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:storage/v20180301preview:ManagementPolicy":
                return ManagementPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:storage/v20180301preview:StorageAccount":
                return StorageAccount(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:storage/v20180301preview:StorageAccountManagementPolicies":
                return StorageAccountManagementPolicies(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "storage/v20180301preview", _module_instance)

_register_module()
