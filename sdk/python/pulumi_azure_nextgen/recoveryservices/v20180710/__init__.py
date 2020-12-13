# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .get_replication_fabric import *
from .get_replication_migration_item import *
from .get_replication_network_mapping import *
from .get_replication_policy import *
from .get_replication_protected_item import *
from .get_replication_protection_container_mapping import *
from .get_replication_recovery_plan import *
from .get_replication_recovery_services_provider import *
from .get_replication_storage_classification_mapping import *
from .get_replicationv_center import *
from .replication_fabric import *
from .replication_migration_item import *
from .replication_network_mapping import *
from .replication_policy import *
from .replication_protected_item import *
from .replication_protection_container_mapping import *
from .replication_recovery_plan import *
from .replication_recovery_services_provider import *
from .replication_storage_classification_mapping import *
from .replicationv_center import *
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
            if typ == "azure-nextgen:recoveryservices/v20180710:ReplicationFabric":
                return ReplicationFabric(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationMigrationItem":
                return ReplicationMigrationItem(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationNetworkMapping":
                return ReplicationNetworkMapping(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationPolicy":
                return ReplicationPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationProtectedItem":
                return ReplicationProtectedItem(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationProtectionContainerMapping":
                return ReplicationProtectionContainerMapping(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationRecoveryPlan":
                return ReplicationRecoveryPlan(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationRecoveryServicesProvider":
                return ReplicationRecoveryServicesProvider(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationStorageClassificationMapping":
                return ReplicationStorageClassificationMapping(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:recoveryservices/v20180710:ReplicationvCenter":
                return ReplicationvCenter(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "recoveryservices/v20180710", _module_instance)

_register_module()
