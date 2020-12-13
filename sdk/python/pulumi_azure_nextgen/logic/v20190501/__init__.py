# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .get_integration_account import *
from .get_integration_account_agreement import *
from .get_integration_account_assembly import *
from .get_integration_account_batch_configuration import *
from .get_integration_account_certificate import *
from .get_integration_account_map import *
from .get_integration_account_partner import *
from .get_integration_account_schema import *
from .get_integration_account_session import *
from .get_integration_service_environment import *
from .get_integration_service_environment_managed_api import *
from .get_workflow import *
from .integration_account import *
from .integration_account_agreement import *
from .integration_account_assembly import *
from .integration_account_batch_configuration import *
from .integration_account_certificate import *
from .integration_account_map import *
from .integration_account_partner import *
from .integration_account_schema import *
from .integration_account_session import *
from .integration_service_environment import *
from .integration_service_environment_managed_api import *
from .list_integration_account_agreement_content_callback_url import *
from .list_integration_account_assembly_content_callback_url import *
from .list_integration_account_callback_url import *
from .list_integration_account_key_vault_keys import *
from .list_integration_account_map_content_callback_url import *
from .list_integration_account_partner_content_callback_url import *
from .list_integration_account_schema_content_callback_url import *
from .list_workflow_callback_url import *
from .list_workflow_run_action_expression_traces import *
from .list_workflow_run_action_repetition_expression_traces import *
from .list_workflow_trigger_callback_url import *
from .list_workflow_version_trigger_callback_url import *
from .workflow import *
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
            if typ == "azure-nextgen:logic/v20190501:IntegrationAccount":
                return IntegrationAccount(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountAgreement":
                return IntegrationAccountAgreement(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountAssembly":
                return IntegrationAccountAssembly(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountBatchConfiguration":
                return IntegrationAccountBatchConfiguration(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountCertificate":
                return IntegrationAccountCertificate(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountMap":
                return IntegrationAccountMap(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountPartner":
                return IntegrationAccountPartner(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountSchema":
                return IntegrationAccountSchema(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationAccountSession":
                return IntegrationAccountSession(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationServiceEnvironment":
                return IntegrationServiceEnvironment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:IntegrationServiceEnvironmentManagedApi":
                return IntegrationServiceEnvironmentManagedApi(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:logic/v20190501:Workflow":
                return Workflow(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "logic/v20190501", _module_instance)

_register_module()
