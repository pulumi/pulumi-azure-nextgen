# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .get_managed_database import *
from .get_managed_instance import *
from .get_managed_instance_azure_ad_only_authentication import *
from .get_server_azure_ad_only_authentication import *
from .get_server_trust_group import *
from .managed_database import *
from .managed_instance import *
from .managed_instance_azure_ad_only_authentication import *
from .server_azure_ad_only_authentication import *
from .server_trust_group import *
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
            if typ == "azure-nextgen:sql/v20200202preview:ManagedDatabase":
                return ManagedDatabase(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:sql/v20200202preview:ManagedInstance":
                return ManagedInstance(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:sql/v20200202preview:ManagedInstanceAzureADOnlyAuthentication":
                return ManagedInstanceAzureADOnlyAuthentication(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:sql/v20200202preview:ServerAzureADOnlyAuthentication":
                return ServerAzureADOnlyAuthentication(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:sql/v20200202preview:ServerTrustGroup":
                return ServerTrustGroup(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "sql/v20200202preview", _module_instance)

_register_module()
