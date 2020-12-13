# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs
from ._enums import *

__all__ = [
    'AgentPropertiesResponse',
    'ArgumentResponse',
    'AuthInfoResponse',
    'BaseImageDependencyResponse',
    'BaseImageTriggerResponse',
    'CredentialsResponse',
    'CustomRegistryCredentialsResponse',
    'DockerBuildStepResponse',
    'EncodedTaskStepResponse',
    'FileTaskStepResponse',
    'PlatformPropertiesResponse',
    'SecretObjectResponse',
    'SetValueResponse',
    'SourcePropertiesResponse',
    'SourceRegistryCredentialsResponse',
    'SourceTriggerResponse',
    'TriggerPropertiesResponse',
]

@pulumi.output_type
class AgentPropertiesResponse(dict):
    """
    The properties that determine the run agent configuration.
    """
    def __init__(__self__, *,
                 cpu: Optional[int] = None):
        """
        The properties that determine the run agent configuration.
        :param int cpu: The CPU configuration in terms of number of cores required for the run.
        """
        if cpu is not None:
            pulumi.set(__self__, "cpu", cpu)

    @property
    @pulumi.getter
    def cpu(self) -> Optional[int]:
        """
        The CPU configuration in terms of number of cores required for the run.
        """
        return pulumi.get(self, "cpu")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class ArgumentResponse(dict):
    """
    The properties of a run argument.
    """
    def __init__(__self__, *,
                 name: str,
                 value: str,
                 is_secret: Optional[bool] = None):
        """
        The properties of a run argument.
        :param str name: The name of the argument.
        :param str value: The value of the argument.
        :param bool is_secret: Flag to indicate whether the argument represents a secret and want to be removed from build logs.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "value", value)
        if is_secret is not None:
            pulumi.set(__self__, "is_secret", is_secret)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the argument.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def value(self) -> str:
        """
        The value of the argument.
        """
        return pulumi.get(self, "value")

    @property
    @pulumi.getter(name="isSecret")
    def is_secret(self) -> Optional[bool]:
        """
        Flag to indicate whether the argument represents a secret and want to be removed from build logs.
        """
        return pulumi.get(self, "is_secret")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class AuthInfoResponse(dict):
    """
    The authorization properties for accessing the source code repository.
    """
    def __init__(__self__, *,
                 token: str,
                 token_type: str,
                 expires_in: Optional[int] = None,
                 refresh_token: Optional[str] = None,
                 scope: Optional[str] = None):
        """
        The authorization properties for accessing the source code repository.
        :param str token: The access token used to access the source control provider.
        :param str token_type: The type of Auth token.
        :param int expires_in: Time in seconds that the token remains valid
        :param str refresh_token: The refresh token used to refresh the access token.
        :param str scope: The scope of the access token.
        """
        pulumi.set(__self__, "token", token)
        pulumi.set(__self__, "token_type", token_type)
        if expires_in is not None:
            pulumi.set(__self__, "expires_in", expires_in)
        if refresh_token is not None:
            pulumi.set(__self__, "refresh_token", refresh_token)
        if scope is not None:
            pulumi.set(__self__, "scope", scope)

    @property
    @pulumi.getter
    def token(self) -> str:
        """
        The access token used to access the source control provider.
        """
        return pulumi.get(self, "token")

    @property
    @pulumi.getter(name="tokenType")
    def token_type(self) -> str:
        """
        The type of Auth token.
        """
        return pulumi.get(self, "token_type")

    @property
    @pulumi.getter(name="expiresIn")
    def expires_in(self) -> Optional[int]:
        """
        Time in seconds that the token remains valid
        """
        return pulumi.get(self, "expires_in")

    @property
    @pulumi.getter(name="refreshToken")
    def refresh_token(self) -> Optional[str]:
        """
        The refresh token used to refresh the access token.
        """
        return pulumi.get(self, "refresh_token")

    @property
    @pulumi.getter
    def scope(self) -> Optional[str]:
        """
        The scope of the access token.
        """
        return pulumi.get(self, "scope")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class BaseImageDependencyResponse(dict):
    """
    Properties that describe a base image dependency.
    """
    def __init__(__self__, *,
                 digest: Optional[str] = None,
                 registry: Optional[str] = None,
                 repository: Optional[str] = None,
                 tag: Optional[str] = None,
                 type: Optional[str] = None):
        """
        Properties that describe a base image dependency.
        :param str digest: The sha256-based digest of the image manifest.
        :param str registry: The registry login server.
        :param str repository: The repository name.
        :param str tag: The tag name.
        :param str type: The type of the base image dependency.
        """
        if digest is not None:
            pulumi.set(__self__, "digest", digest)
        if registry is not None:
            pulumi.set(__self__, "registry", registry)
        if repository is not None:
            pulumi.set(__self__, "repository", repository)
        if tag is not None:
            pulumi.set(__self__, "tag", tag)
        if type is not None:
            pulumi.set(__self__, "type", type)

    @property
    @pulumi.getter
    def digest(self) -> Optional[str]:
        """
        The sha256-based digest of the image manifest.
        """
        return pulumi.get(self, "digest")

    @property
    @pulumi.getter
    def registry(self) -> Optional[str]:
        """
        The registry login server.
        """
        return pulumi.get(self, "registry")

    @property
    @pulumi.getter
    def repository(self) -> Optional[str]:
        """
        The repository name.
        """
        return pulumi.get(self, "repository")

    @property
    @pulumi.getter
    def tag(self) -> Optional[str]:
        """
        The tag name.
        """
        return pulumi.get(self, "tag")

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of the base image dependency.
        """
        return pulumi.get(self, "type")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class BaseImageTriggerResponse(dict):
    """
    The trigger based on base image dependency.
    """
    def __init__(__self__, *,
                 base_image_trigger_type: str,
                 name: str,
                 status: Optional[str] = None):
        """
        The trigger based on base image dependency.
        :param str base_image_trigger_type: The type of the auto trigger for base image dependency updates.
        :param str name: The name of the trigger.
        :param str status: The current status of trigger.
        """
        pulumi.set(__self__, "base_image_trigger_type", base_image_trigger_type)
        pulumi.set(__self__, "name", name)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter(name="baseImageTriggerType")
    def base_image_trigger_type(self) -> str:
        """
        The type of the auto trigger for base image dependency updates.
        """
        return pulumi.get(self, "base_image_trigger_type")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the trigger.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        The current status of trigger.
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CredentialsResponse(dict):
    """
    The parameters that describes a set of credentials that will be used when a run is invoked.
    """
    def __init__(__self__, *,
                 custom_registries: Optional[Mapping[str, 'outputs.CustomRegistryCredentialsResponse']] = None,
                 source_registry: Optional['outputs.SourceRegistryCredentialsResponse'] = None):
        """
        The parameters that describes a set of credentials that will be used when a run is invoked.
        :param Mapping[str, 'CustomRegistryCredentialsResponseArgs'] custom_registries: Describes the credential parameters for accessing other custom registries. The key
               for the dictionary item will be the registry login server (myregistry.azurecr.io) and
               the value of the item will be the registry credentials for accessing the registry.
        :param 'SourceRegistryCredentialsResponseArgs' source_registry: Describes the credential parameters for accessing the source registry.
        """
        if custom_registries is not None:
            pulumi.set(__self__, "custom_registries", custom_registries)
        if source_registry is not None:
            pulumi.set(__self__, "source_registry", source_registry)

    @property
    @pulumi.getter(name="customRegistries")
    def custom_registries(self) -> Optional[Mapping[str, 'outputs.CustomRegistryCredentialsResponse']]:
        """
        Describes the credential parameters for accessing other custom registries. The key
        for the dictionary item will be the registry login server (myregistry.azurecr.io) and
        the value of the item will be the registry credentials for accessing the registry.
        """
        return pulumi.get(self, "custom_registries")

    @property
    @pulumi.getter(name="sourceRegistry")
    def source_registry(self) -> Optional['outputs.SourceRegistryCredentialsResponse']:
        """
        Describes the credential parameters for accessing the source registry.
        """
        return pulumi.get(self, "source_registry")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class CustomRegistryCredentialsResponse(dict):
    """
    Describes the credentials that will be used to access a custom registry during a run.
    """
    def __init__(__self__, *,
                 password: Optional['outputs.SecretObjectResponse'] = None,
                 user_name: Optional['outputs.SecretObjectResponse'] = None):
        """
        Describes the credentials that will be used to access a custom registry during a run.
        :param 'SecretObjectResponseArgs' password: The password for logging into the custom registry. The password is a secret 
               object that allows multiple ways of providing the value for it.
        :param 'SecretObjectResponseArgs' user_name: The username for logging into the custom registry.
        """
        if password is not None:
            pulumi.set(__self__, "password", password)
        if user_name is not None:
            pulumi.set(__self__, "user_name", user_name)

    @property
    @pulumi.getter
    def password(self) -> Optional['outputs.SecretObjectResponse']:
        """
        The password for logging into the custom registry. The password is a secret 
        object that allows multiple ways of providing the value for it.
        """
        return pulumi.get(self, "password")

    @property
    @pulumi.getter(name="userName")
    def user_name(self) -> Optional['outputs.SecretObjectResponse']:
        """
        The username for logging into the custom registry.
        """
        return pulumi.get(self, "user_name")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class DockerBuildStepResponse(dict):
    """
    The Docker build step.
    """
    def __init__(__self__, *,
                 base_image_dependencies: Sequence['outputs.BaseImageDependencyResponse'],
                 docker_file_path: str,
                 type: str,
                 arguments: Optional[Sequence['outputs.ArgumentResponse']] = None,
                 context_access_token: Optional[str] = None,
                 context_path: Optional[str] = None,
                 image_names: Optional[Sequence[str]] = None,
                 is_push_enabled: Optional[bool] = None,
                 no_cache: Optional[bool] = None,
                 target: Optional[str] = None):
        """
        The Docker build step.
        :param Sequence['BaseImageDependencyResponseArgs'] base_image_dependencies: List of base image dependencies for a step.
        :param str docker_file_path: The Docker file path relative to the source context.
        :param str type: The type of the step.
        :param Sequence['ArgumentResponseArgs'] arguments: The collection of override arguments to be used when executing this build step.
        :param str context_access_token: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        :param str context_path: The URL(absolute or relative) of the source context for the task step.
        :param Sequence[str] image_names: The fully qualified image names including the repository and tag.
        :param bool is_push_enabled: The value of this property indicates whether the image built should be pushed to the registry or not.
        :param bool no_cache: The value of this property indicates whether the image cache is enabled or not.
        :param str target: The name of the target build stage for the docker build.
        """
        pulumi.set(__self__, "base_image_dependencies", base_image_dependencies)
        pulumi.set(__self__, "docker_file_path", docker_file_path)
        pulumi.set(__self__, "type", 'Docker')
        if arguments is not None:
            pulumi.set(__self__, "arguments", arguments)
        if context_access_token is not None:
            pulumi.set(__self__, "context_access_token", context_access_token)
        if context_path is not None:
            pulumi.set(__self__, "context_path", context_path)
        if image_names is not None:
            pulumi.set(__self__, "image_names", image_names)
        if is_push_enabled is not None:
            pulumi.set(__self__, "is_push_enabled", is_push_enabled)
        if no_cache is not None:
            pulumi.set(__self__, "no_cache", no_cache)
        if target is not None:
            pulumi.set(__self__, "target", target)

    @property
    @pulumi.getter(name="baseImageDependencies")
    def base_image_dependencies(self) -> Sequence['outputs.BaseImageDependencyResponse']:
        """
        List of base image dependencies for a step.
        """
        return pulumi.get(self, "base_image_dependencies")

    @property
    @pulumi.getter(name="dockerFilePath")
    def docker_file_path(self) -> str:
        """
        The Docker file path relative to the source context.
        """
        return pulumi.get(self, "docker_file_path")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the step.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def arguments(self) -> Optional[Sequence['outputs.ArgumentResponse']]:
        """
        The collection of override arguments to be used when executing this build step.
        """
        return pulumi.get(self, "arguments")

    @property
    @pulumi.getter(name="contextAccessToken")
    def context_access_token(self) -> Optional[str]:
        """
        The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        """
        return pulumi.get(self, "context_access_token")

    @property
    @pulumi.getter(name="contextPath")
    def context_path(self) -> Optional[str]:
        """
        The URL(absolute or relative) of the source context for the task step.
        """
        return pulumi.get(self, "context_path")

    @property
    @pulumi.getter(name="imageNames")
    def image_names(self) -> Optional[Sequence[str]]:
        """
        The fully qualified image names including the repository and tag.
        """
        return pulumi.get(self, "image_names")

    @property
    @pulumi.getter(name="isPushEnabled")
    def is_push_enabled(self) -> Optional[bool]:
        """
        The value of this property indicates whether the image built should be pushed to the registry or not.
        """
        return pulumi.get(self, "is_push_enabled")

    @property
    @pulumi.getter(name="noCache")
    def no_cache(self) -> Optional[bool]:
        """
        The value of this property indicates whether the image cache is enabled or not.
        """
        return pulumi.get(self, "no_cache")

    @property
    @pulumi.getter
    def target(self) -> Optional[str]:
        """
        The name of the target build stage for the docker build.
        """
        return pulumi.get(self, "target")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class EncodedTaskStepResponse(dict):
    """
    The properties of a encoded task step.
    """
    def __init__(__self__, *,
                 base_image_dependencies: Sequence['outputs.BaseImageDependencyResponse'],
                 encoded_task_content: str,
                 type: str,
                 context_access_token: Optional[str] = None,
                 context_path: Optional[str] = None,
                 encoded_values_content: Optional[str] = None,
                 values: Optional[Sequence['outputs.SetValueResponse']] = None):
        """
        The properties of a encoded task step.
        :param Sequence['BaseImageDependencyResponseArgs'] base_image_dependencies: List of base image dependencies for a step.
        :param str encoded_task_content: Base64 encoded value of the template/definition file content.
        :param str type: The type of the step.
        :param str context_access_token: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        :param str context_path: The URL(absolute or relative) of the source context for the task step.
        :param str encoded_values_content: Base64 encoded value of the parameters/values file content.
        :param Sequence['SetValueResponseArgs'] values: The collection of overridable values that can be passed when running a task.
        """
        pulumi.set(__self__, "base_image_dependencies", base_image_dependencies)
        pulumi.set(__self__, "encoded_task_content", encoded_task_content)
        pulumi.set(__self__, "type", 'EncodedTask')
        if context_access_token is not None:
            pulumi.set(__self__, "context_access_token", context_access_token)
        if context_path is not None:
            pulumi.set(__self__, "context_path", context_path)
        if encoded_values_content is not None:
            pulumi.set(__self__, "encoded_values_content", encoded_values_content)
        if values is not None:
            pulumi.set(__self__, "values", values)

    @property
    @pulumi.getter(name="baseImageDependencies")
    def base_image_dependencies(self) -> Sequence['outputs.BaseImageDependencyResponse']:
        """
        List of base image dependencies for a step.
        """
        return pulumi.get(self, "base_image_dependencies")

    @property
    @pulumi.getter(name="encodedTaskContent")
    def encoded_task_content(self) -> str:
        """
        Base64 encoded value of the template/definition file content.
        """
        return pulumi.get(self, "encoded_task_content")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the step.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="contextAccessToken")
    def context_access_token(self) -> Optional[str]:
        """
        The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        """
        return pulumi.get(self, "context_access_token")

    @property
    @pulumi.getter(name="contextPath")
    def context_path(self) -> Optional[str]:
        """
        The URL(absolute or relative) of the source context for the task step.
        """
        return pulumi.get(self, "context_path")

    @property
    @pulumi.getter(name="encodedValuesContent")
    def encoded_values_content(self) -> Optional[str]:
        """
        Base64 encoded value of the parameters/values file content.
        """
        return pulumi.get(self, "encoded_values_content")

    @property
    @pulumi.getter
    def values(self) -> Optional[Sequence['outputs.SetValueResponse']]:
        """
        The collection of overridable values that can be passed when running a task.
        """
        return pulumi.get(self, "values")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class FileTaskStepResponse(dict):
    """
    The properties of a task step.
    """
    def __init__(__self__, *,
                 base_image_dependencies: Sequence['outputs.BaseImageDependencyResponse'],
                 task_file_path: str,
                 type: str,
                 context_access_token: Optional[str] = None,
                 context_path: Optional[str] = None,
                 values: Optional[Sequence['outputs.SetValueResponse']] = None,
                 values_file_path: Optional[str] = None):
        """
        The properties of a task step.
        :param Sequence['BaseImageDependencyResponseArgs'] base_image_dependencies: List of base image dependencies for a step.
        :param str task_file_path: The task template/definition file path relative to the source context.
        :param str type: The type of the step.
        :param str context_access_token: The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        :param str context_path: The URL(absolute or relative) of the source context for the task step.
        :param Sequence['SetValueResponseArgs'] values: The collection of overridable values that can be passed when running a task.
        :param str values_file_path: The task values/parameters file path relative to the source context.
        """
        pulumi.set(__self__, "base_image_dependencies", base_image_dependencies)
        pulumi.set(__self__, "task_file_path", task_file_path)
        pulumi.set(__self__, "type", 'FileTask')
        if context_access_token is not None:
            pulumi.set(__self__, "context_access_token", context_access_token)
        if context_path is not None:
            pulumi.set(__self__, "context_path", context_path)
        if values is not None:
            pulumi.set(__self__, "values", values)
        if values_file_path is not None:
            pulumi.set(__self__, "values_file_path", values_file_path)

    @property
    @pulumi.getter(name="baseImageDependencies")
    def base_image_dependencies(self) -> Sequence['outputs.BaseImageDependencyResponse']:
        """
        List of base image dependencies for a step.
        """
        return pulumi.get(self, "base_image_dependencies")

    @property
    @pulumi.getter(name="taskFilePath")
    def task_file_path(self) -> str:
        """
        The task template/definition file path relative to the source context.
        """
        return pulumi.get(self, "task_file_path")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        The type of the step.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="contextAccessToken")
    def context_access_token(self) -> Optional[str]:
        """
        The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        """
        return pulumi.get(self, "context_access_token")

    @property
    @pulumi.getter(name="contextPath")
    def context_path(self) -> Optional[str]:
        """
        The URL(absolute or relative) of the source context for the task step.
        """
        return pulumi.get(self, "context_path")

    @property
    @pulumi.getter
    def values(self) -> Optional[Sequence['outputs.SetValueResponse']]:
        """
        The collection of overridable values that can be passed when running a task.
        """
        return pulumi.get(self, "values")

    @property
    @pulumi.getter(name="valuesFilePath")
    def values_file_path(self) -> Optional[str]:
        """
        The task values/parameters file path relative to the source context.
        """
        return pulumi.get(self, "values_file_path")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class PlatformPropertiesResponse(dict):
    """
    The platform properties against which the run has to happen.
    """
    def __init__(__self__, *,
                 os: str,
                 architecture: Optional[str] = None,
                 variant: Optional[str] = None):
        """
        The platform properties against which the run has to happen.
        :param str os: The operating system type required for the run.
        :param str architecture: The OS architecture.
        :param str variant: Variant of the CPU.
        """
        pulumi.set(__self__, "os", os)
        if architecture is not None:
            pulumi.set(__self__, "architecture", architecture)
        if variant is not None:
            pulumi.set(__self__, "variant", variant)

    @property
    @pulumi.getter
    def os(self) -> str:
        """
        The operating system type required for the run.
        """
        return pulumi.get(self, "os")

    @property
    @pulumi.getter
    def architecture(self) -> Optional[str]:
        """
        The OS architecture.
        """
        return pulumi.get(self, "architecture")

    @property
    @pulumi.getter
    def variant(self) -> Optional[str]:
        """
        Variant of the CPU.
        """
        return pulumi.get(self, "variant")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SecretObjectResponse(dict):
    """
    Describes the properties of a secret object value.
    """
    def __init__(__self__, *,
                 type: Optional[str] = None,
                 value: Optional[str] = None):
        """
        Describes the properties of a secret object value.
        :param str type: The type of the secret object which determines how the value of the secret object has to be
               interpreted.
        :param str value: The value of the secret. The format of this value will be determined
               based on the type of the secret object. If the type is Opaque, the value will be
               used as is without any modification.
        """
        if type is not None:
            pulumi.set(__self__, "type", type)
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[str]:
        """
        The type of the secret object which determines how the value of the secret object has to be
        interpreted.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def value(self) -> Optional[str]:
        """
        The value of the secret. The format of this value will be determined
        based on the type of the secret object. If the type is Opaque, the value will be
        used as is without any modification.
        """
        return pulumi.get(self, "value")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SetValueResponse(dict):
    """
    The properties of a overridable value that can be passed to a task template.
    """
    def __init__(__self__, *,
                 name: str,
                 value: str,
                 is_secret: Optional[bool] = None):
        """
        The properties of a overridable value that can be passed to a task template.
        :param str name: The name of the overridable value.
        :param str value: The overridable value.
        :param bool is_secret: Flag to indicate whether the value represents a secret or not.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "value", value)
        if is_secret is not None:
            pulumi.set(__self__, "is_secret", is_secret)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the overridable value.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def value(self) -> str:
        """
        The overridable value.
        """
        return pulumi.get(self, "value")

    @property
    @pulumi.getter(name="isSecret")
    def is_secret(self) -> Optional[bool]:
        """
        Flag to indicate whether the value represents a secret or not.
        """
        return pulumi.get(self, "is_secret")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SourcePropertiesResponse(dict):
    """
    The properties of the source code repository.
    """
    def __init__(__self__, *,
                 repository_url: str,
                 source_control_type: str,
                 branch: Optional[str] = None,
                 source_control_auth_properties: Optional['outputs.AuthInfoResponse'] = None):
        """
        The properties of the source code repository.
        :param str repository_url: The full URL to the source code repository
        :param str source_control_type: The type of source control service.
        :param str branch: The branch name of the source code.
        :param 'AuthInfoResponseArgs' source_control_auth_properties: The authorization properties for accessing the source code repository and to set up
               webhooks for notifications.
        """
        pulumi.set(__self__, "repository_url", repository_url)
        pulumi.set(__self__, "source_control_type", source_control_type)
        if branch is not None:
            pulumi.set(__self__, "branch", branch)
        if source_control_auth_properties is not None:
            pulumi.set(__self__, "source_control_auth_properties", source_control_auth_properties)

    @property
    @pulumi.getter(name="repositoryUrl")
    def repository_url(self) -> str:
        """
        The full URL to the source code repository
        """
        return pulumi.get(self, "repository_url")

    @property
    @pulumi.getter(name="sourceControlType")
    def source_control_type(self) -> str:
        """
        The type of source control service.
        """
        return pulumi.get(self, "source_control_type")

    @property
    @pulumi.getter
    def branch(self) -> Optional[str]:
        """
        The branch name of the source code.
        """
        return pulumi.get(self, "branch")

    @property
    @pulumi.getter(name="sourceControlAuthProperties")
    def source_control_auth_properties(self) -> Optional['outputs.AuthInfoResponse']:
        """
        The authorization properties for accessing the source code repository and to set up
        webhooks for notifications.
        """
        return pulumi.get(self, "source_control_auth_properties")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SourceRegistryCredentialsResponse(dict):
    """
    Describes the credential parameters for accessing the source registry.
    """
    def __init__(__self__, *,
                 login_mode: Optional[str] = None):
        """
        Describes the credential parameters for accessing the source registry.
        :param str login_mode: The authentication mode which determines the source registry login scope. The credentials for the source registry
               will be generated using the given scope. These credentials will be used to login to
               the source registry during the run.
        """
        if login_mode is not None:
            pulumi.set(__self__, "login_mode", login_mode)

    @property
    @pulumi.getter(name="loginMode")
    def login_mode(self) -> Optional[str]:
        """
        The authentication mode which determines the source registry login scope. The credentials for the source registry
        will be generated using the given scope. These credentials will be used to login to
        the source registry during the run.
        """
        return pulumi.get(self, "login_mode")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SourceTriggerResponse(dict):
    """
    The properties of a source based trigger.
    """
    def __init__(__self__, *,
                 name: str,
                 source_repository: 'outputs.SourcePropertiesResponse',
                 source_trigger_events: Sequence[str],
                 status: Optional[str] = None):
        """
        The properties of a source based trigger.
        :param str name: The name of the trigger.
        :param 'SourcePropertiesResponseArgs' source_repository: The properties that describes the source(code) for the task.
        :param Sequence[str] source_trigger_events: The source event corresponding to the trigger.
        :param str status: The current status of trigger.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "source_repository", source_repository)
        pulumi.set(__self__, "source_trigger_events", source_trigger_events)
        if status is not None:
            pulumi.set(__self__, "status", status)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The name of the trigger.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="sourceRepository")
    def source_repository(self) -> 'outputs.SourcePropertiesResponse':
        """
        The properties that describes the source(code) for the task.
        """
        return pulumi.get(self, "source_repository")

    @property
    @pulumi.getter(name="sourceTriggerEvents")
    def source_trigger_events(self) -> Sequence[str]:
        """
        The source event corresponding to the trigger.
        """
        return pulumi.get(self, "source_trigger_events")

    @property
    @pulumi.getter
    def status(self) -> Optional[str]:
        """
        The current status of trigger.
        """
        return pulumi.get(self, "status")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class TriggerPropertiesResponse(dict):
    """
    The properties of a trigger.
    """
    def __init__(__self__, *,
                 base_image_trigger: Optional['outputs.BaseImageTriggerResponse'] = None,
                 source_triggers: Optional[Sequence['outputs.SourceTriggerResponse']] = None):
        """
        The properties of a trigger.
        :param 'BaseImageTriggerResponseArgs' base_image_trigger: The trigger based on base image dependencies.
        :param Sequence['SourceTriggerResponseArgs'] source_triggers: The collection of triggers based on source code repository.
        """
        if base_image_trigger is not None:
            pulumi.set(__self__, "base_image_trigger", base_image_trigger)
        if source_triggers is not None:
            pulumi.set(__self__, "source_triggers", source_triggers)

    @property
    @pulumi.getter(name="baseImageTrigger")
    def base_image_trigger(self) -> Optional['outputs.BaseImageTriggerResponse']:
        """
        The trigger based on base image dependencies.
        """
        return pulumi.get(self, "base_image_trigger")

    @property
    @pulumi.getter(name="sourceTriggers")
    def source_triggers(self) -> Optional[Sequence['outputs.SourceTriggerResponse']]:
        """
        The collection of triggers based on source code repository.
        """
        return pulumi.get(self, "source_triggers")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


