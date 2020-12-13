# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .get_namespace import *
from .get_namespace_authorization_rule import *
from .get_queue import *
from .get_queue_authorization_rule import *
from .get_subscription import *
from .get_topic import *
from .get_topic_authorization_rule import *
from .list_namespace_keys import *
from .namespace import *
from .namespace_authorization_rule import *
from .queue import *
from .queue_authorization_rule import *
from .subscription import *
from .topic import *
from .topic_authorization_rule import *
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
            if typ == "azure-nextgen:servicebus/v20150801:Namespace":
                return Namespace(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:servicebus/v20150801:NamespaceAuthorizationRule":
                return NamespaceAuthorizationRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:servicebus/v20150801:Queue":
                return Queue(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:servicebus/v20150801:QueueAuthorizationRule":
                return QueueAuthorizationRule(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:servicebus/v20150801:Subscription":
                return Subscription(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:servicebus/v20150801:Topic":
                return Topic(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:servicebus/v20150801:TopicAuthorizationRule":
                return TopicAuthorizationRule(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "servicebus/v20150801", _module_instance)

_register_module()
