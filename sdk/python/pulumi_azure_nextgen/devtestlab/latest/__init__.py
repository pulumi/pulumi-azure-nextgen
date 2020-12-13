# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .artifact_source import *
from .custom_image import *
from .disk import *
from .environment import *
from .formula import *
from .get_artifact_source import *
from .get_custom_image import *
from .get_disk import *
from .get_environment import *
from .get_formula import *
from .get_global_schedule import *
from .get_lab import *
from .get_notification_channel import *
from .get_policy import *
from .get_schedule import *
from .get_secret import *
from .get_service_fabric import *
from .get_service_fabric_schedule import *
from .get_service_runner import *
from .get_user import *
from .get_virtual_machine import *
from .get_virtual_machine_rdp_file_contents import *
from .get_virtual_machine_schedule import *
from .get_virtual_network import *
from .global_schedule import *
from .lab import *
from .list_lab_vhds import *
from .list_schedule_applicable import *
from .list_service_fabric_applicable_schedules import *
from .list_virtual_machine_applicable_schedules import *
from .notification_channel import *
from .policy import *
from .schedule import *
from .secret import *
from .service_fabric import *
from .service_fabric_schedule import *
from .service_runner import *
from .user import *
from .virtual_machine import *
from .virtual_machine_schedule import *
from .virtual_network import *
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
            if typ == "azure-nextgen:devtestlab/latest:ArtifactSource":
                return ArtifactSource(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:CustomImage":
                return CustomImage(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Disk":
                return Disk(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Environment":
                return Environment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Formula":
                return Formula(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:GlobalSchedule":
                return GlobalSchedule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Lab":
                return Lab(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:NotificationChannel":
                return NotificationChannel(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Policy":
                return Policy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Schedule":
                return Schedule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:Secret":
                return Secret(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:ServiceFabric":
                return ServiceFabric(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:ServiceFabricSchedule":
                return ServiceFabricSchedule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:ServiceRunner":
                return ServiceRunner(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:User":
                return User(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:VirtualMachine":
                return VirtualMachine(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:VirtualMachineSchedule":
                return VirtualMachineSchedule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:devtestlab/latest:VirtualNetwork":
                return VirtualNetwork(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "devtestlab/latest", _module_instance)

_register_module()
