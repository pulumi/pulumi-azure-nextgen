# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .configuration import *
from .database import *
from .firewall_rule import *
from .get_configuration import *
from .get_database import *
from .get_firewall_rule import *
from .get_private_endpoint_connection import *
from .get_server import *
from .get_virtual_network_rule import *
from .private_endpoint_connection import *
from .server import *
from .virtual_network_rule import *
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
            if typ == "azure-nextgen:dbformariadb/latest:Configuration":
                return Configuration(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformariadb/latest:Database":
                return Database(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformariadb/latest:FirewallRule":
                return FirewallRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformariadb/latest:PrivateEndpointConnection":
                return PrivateEndpointConnection(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformariadb/latest:Server":
                return Server(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformariadb/latest:VirtualNetworkRule":
                return VirtualNetworkRule(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "dbformariadb/latest", _module_instance)

_register_module()
