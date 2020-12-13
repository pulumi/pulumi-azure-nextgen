# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .bandwidth_schedule import *
from .container import *
from .device import *
from .get_bandwidth_schedule import *
from .get_container import *
from .get_device import *
from .get_device_extended_information import *
from .get_order import *
from .get_role import *
from .get_share import *
from .get_storage_account import *
from .get_storage_account_credential import *
from .get_trigger import *
from .get_user import *
from .order import *
from .role import *
from .share import *
from .storage_account import *
from .storage_account_credential import *
from .trigger import *
from .user import *
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
            if typ == "azure-nextgen:databoxedge/v20190801:BandwidthSchedule":
                return BandwidthSchedule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:Container":
                return Container(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:Device":
                return Device(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:Order":
                return Order(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:Role":
                return Role(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:Share":
                return Share(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:StorageAccount":
                return StorageAccount(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:StorageAccountCredential":
                return StorageAccountCredential(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:Trigger":
                return Trigger(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:databoxedge/v20190801:User":
                return User(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "databoxedge/v20190801", _module_instance)

_register_module()
