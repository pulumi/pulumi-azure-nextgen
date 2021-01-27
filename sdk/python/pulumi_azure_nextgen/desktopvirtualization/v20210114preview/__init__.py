# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .application import *
from .application_group import *
from .get_application import *
from .get_application_group import *
from .get_host_pool import *
from .get_msix_package import *
from .get_scaling_plan import *
from .get_workspace import *
from .host_pool import *
from .msix_package import *
from .scaling_plan import *
from .workspace import *
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
            if typ == "azure-nextgen:desktopvirtualization/v20210114preview:Application":
                return Application(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:desktopvirtualization/v20210114preview:ApplicationGroup":
                return ApplicationGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:desktopvirtualization/v20210114preview:HostPool":
                return HostPool(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:desktopvirtualization/v20210114preview:MSIXPackage":
                return MSIXPackage(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:desktopvirtualization/v20210114preview:ScalingPlan":
                return ScalingPlan(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:desktopvirtualization/v20210114preview:Workspace":
                return Workspace(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "desktopvirtualization/v20210114preview", _module_instance)

_register_module()
