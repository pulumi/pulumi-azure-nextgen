# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from enum import Enum

__all__ = [
    'ArtifactKind',
    'BlueprintTargetScope',
    'TemplateParameterType',
]


class ArtifactKind(str, Enum):
    """
    Specifies the kind of Blueprint artifact.
    """
    TEMPLATE = "template"
    ROLE_ASSIGNMENT = "roleAssignment"
    POLICY_ASSIGNMENT = "policyAssignment"


class BlueprintTargetScope(str, Enum):
    """
    The scope where this Blueprint can be applied.
    """
    SUBSCRIPTION = "subscription"
    MANAGEMENT_GROUP = "managementGroup"


class TemplateParameterType(str, Enum):
    """
    Allowed data types for Azure Resource Manager template parameters.
    """
    STRING = "string"
    ARRAY = "array"
    BOOL = "bool"
    INT = "int"
    OBJECT = "object"
    SECURE_OBJECT = "secureObject"
    SECURE_STRING = "secureString"