# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .get_sql_database import *
from .get_sql_pools_v3 import *
from .sql_database import *
from .sql_pools_v3 import *
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
            if typ == "azure-nextgen:synapse/v20200401preview:SqlDatabase":
                return SqlDatabase(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:synapse/v20200401preview:SqlPoolsV3":
                return SqlPoolsV3(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "synapse/v20200401preview", _module_instance)

_register_module()
