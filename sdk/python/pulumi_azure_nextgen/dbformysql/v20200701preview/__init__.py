# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .database import *
from .firewall_rule import *
from .get_database import *
from .get_firewall_rule import *
from .get_server import *
from .get_server_key import *
from .server import *
from .server_key import *
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
            if typ == "azure-nextgen:dbformysql/v20200701preview:Database":
                return Database(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformysql/v20200701preview:FirewallRule":
                return FirewallRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformysql/v20200701preview:Server":
                return Server(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:dbformysql/v20200701preview:ServerKey":
                return ServerKey(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "dbformysql/v20200701preview", _module_instance)

_register_module()
