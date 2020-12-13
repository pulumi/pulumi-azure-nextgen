# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .artifact import *
from .blueprint import *
from .get_artifact import *
from .get_blueprint import *
from .get_published_blueprint import *
from .published_blueprint import *
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
            if typ == "azure-nextgen:management/v20171111preview:Artifact":
                return Artifact(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:management/v20171111preview:Blueprint":
                return Blueprint(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:management/v20171111preview:PublishedBlueprint":
                return PublishedBlueprint(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "management/v20171111preview", _module_instance)

_register_module()
