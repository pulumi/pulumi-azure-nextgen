# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .availability_set import *
from .get_availability_set import *
from .get_virtual_machine import *
from .get_virtual_machine_extension import *
from .get_virtual_machine_scale_set import *
from .virtual_machine import *
from .virtual_machine_extension import *
from .virtual_machine_scale_set import *
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
            if typ == "azure-nextgen:compute/v20160330:AvailabilitySet":
                return AvailabilitySet(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:compute/v20160330:VirtualMachine":
                return VirtualMachine(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:compute/v20160330:VirtualMachineExtension":
                return VirtualMachineExtension(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:compute/v20160330:VirtualMachineScaleSet":
                return VirtualMachineScaleSet(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "compute/v20160330", _module_instance)

_register_module()
