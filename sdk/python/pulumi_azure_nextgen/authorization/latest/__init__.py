# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .get_management_lock_at_resource_group_level import *
from .get_management_lock_at_resource_level import *
from .get_management_lock_at_subscription_level import *
from .get_management_lock_by_scope import *
from .get_policy_assignment import *
from .get_policy_definition import *
from .get_policy_set_definition import *
from .get_role_assignment import *
from .get_role_definition import *
from .management_lock_at_resource_group_level import *
from .management_lock_at_resource_level import *
from .management_lock_at_subscription_level import *
from .management_lock_by_scope import *
from .policy_assignment import *
from .policy_definition import *
from .policy_set_definition import *
from .role_assignment import *
from .role_definition import *
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
            if typ == "azure-nextgen:authorization/latest:ManagementLockAtResourceGroupLevel":
                return ManagementLockAtResourceGroupLevel(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:ManagementLockAtResourceLevel":
                return ManagementLockAtResourceLevel(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:ManagementLockAtSubscriptionLevel":
                return ManagementLockAtSubscriptionLevel(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:ManagementLockByScope":
                return ManagementLockByScope(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:PolicyAssignment":
                return PolicyAssignment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:PolicyDefinition":
                return PolicyDefinition(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:PolicySetDefinition":
                return PolicySetDefinition(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:RoleAssignment":
                return RoleAssignment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:authorization/latest:RoleDefinition":
                return RoleDefinition(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "authorization/latest", _module_instance)

_register_module()
