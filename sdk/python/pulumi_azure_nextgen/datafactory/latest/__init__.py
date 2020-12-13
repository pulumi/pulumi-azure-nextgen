# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .data_flow import *
from .dataset import *
from .factory import *
from .get_data_flow import *
from .get_dataset import *
from .get_exposure_control_feature_value import *
from .get_exposure_control_feature_value_by_factory import *
from .get_factory import *
from .get_factory_data_plane_access import *
from .get_factory_git_hub_access_token import *
from .get_integration_runtime import *
from .get_integration_runtime_connection_info import *
from .get_integration_runtime_object_metadatum import *
from .get_integration_runtime_status import *
from .get_linked_service import *
from .get_managed_private_endpoint import *
from .get_pipeline import *
from .get_trigger import *
from .get_trigger_event_subscription_status import *
from .integration_runtime import *
from .linked_service import *
from .list_integration_runtime_auth_keys import *
from .managed_private_endpoint import *
from .pipeline import *
from .trigger import *
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
            if typ == "azure-nextgen:datafactory/latest:DataFlow":
                return DataFlow(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:Dataset":
                return Dataset(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:Factory":
                return Factory(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:IntegrationRuntime":
                return IntegrationRuntime(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:LinkedService":
                return LinkedService(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:ManagedPrivateEndpoint":
                return ManagedPrivateEndpoint(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:Pipeline":
                return Pipeline(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:datafactory/latest:Trigger":
                return Trigger(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "datafactory/latest", _module_instance)

_register_module()
