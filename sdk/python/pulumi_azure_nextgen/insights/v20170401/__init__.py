# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .action_group import *
from .activity_log_alert import *
from .get_action_group import *
from .get_activity_log_alert import *
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
            if typ == "azure-nextgen:insights/v20170401:ActionGroup":
                return ActionGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:insights/v20170401:ActivityLogAlert":
                return ActivityLogAlert(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "insights/v20170401", _module_instance)

_register_module()
