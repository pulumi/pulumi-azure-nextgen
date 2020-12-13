# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .application import *
from .application_package import *
from .batch_account import *
from .certificate import *
from .get_application import *
from .get_application_package import *
from .get_batch_account import *
from .get_certificate import *
from .get_pool import *
from .list_batch_account_keys import *
from .pool import *
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
            if typ == "azure-nextgen:batch/latest:Application":
                return Application(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:batch/latest:ApplicationPackage":
                return ApplicationPackage(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:batch/latest:BatchAccount":
                return BatchAccount(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:batch/latest:Certificate":
                return Certificate(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:batch/latest:Pool":
                return Pool(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "batch/latest", _module_instance)

_register_module()
