# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from ... import _utilities, _tables
from . import outputs

__all__ = [
    'GetDiagnosticResult',
    'AwaitableGetDiagnosticResult',
    'get_diagnostic',
]

@pulumi.output_type
class GetDiagnosticResult:
    """
    Diagnostic details.
    """
    def __init__(__self__, always_log=None, backend=None, frontend=None, http_correlation_protocol=None, id=None, log_client_ip=None, logger_id=None, name=None, sampling=None, type=None, verbosity=None):
        if always_log and not isinstance(always_log, str):
            raise TypeError("Expected argument 'always_log' to be a str")
        pulumi.set(__self__, "always_log", always_log)
        if backend and not isinstance(backend, dict):
            raise TypeError("Expected argument 'backend' to be a dict")
        pulumi.set(__self__, "backend", backend)
        if frontend and not isinstance(frontend, dict):
            raise TypeError("Expected argument 'frontend' to be a dict")
        pulumi.set(__self__, "frontend", frontend)
        if http_correlation_protocol and not isinstance(http_correlation_protocol, str):
            raise TypeError("Expected argument 'http_correlation_protocol' to be a str")
        pulumi.set(__self__, "http_correlation_protocol", http_correlation_protocol)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if log_client_ip and not isinstance(log_client_ip, bool):
            raise TypeError("Expected argument 'log_client_ip' to be a bool")
        pulumi.set(__self__, "log_client_ip", log_client_ip)
        if logger_id and not isinstance(logger_id, str):
            raise TypeError("Expected argument 'logger_id' to be a str")
        pulumi.set(__self__, "logger_id", logger_id)
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        pulumi.set(__self__, "name", name)
        if sampling and not isinstance(sampling, dict):
            raise TypeError("Expected argument 'sampling' to be a dict")
        pulumi.set(__self__, "sampling", sampling)
        if type and not isinstance(type, str):
            raise TypeError("Expected argument 'type' to be a str")
        pulumi.set(__self__, "type", type)
        if verbosity and not isinstance(verbosity, str):
            raise TypeError("Expected argument 'verbosity' to be a str")
        pulumi.set(__self__, "verbosity", verbosity)

    @property
    @pulumi.getter(name="alwaysLog")
    def always_log(self) -> Optional[str]:
        """
        Specifies for what type of messages sampling settings should not apply.
        """
        return pulumi.get(self, "always_log")

    @property
    @pulumi.getter
    def backend(self) -> Optional['outputs.PipelineDiagnosticSettingsResponse']:
        """
        Diagnostic settings for incoming/outgoing HTTP messages to the Backend
        """
        return pulumi.get(self, "backend")

    @property
    @pulumi.getter
    def frontend(self) -> Optional['outputs.PipelineDiagnosticSettingsResponse']:
        """
        Diagnostic settings for incoming/outgoing HTTP messages to the Gateway.
        """
        return pulumi.get(self, "frontend")

    @property
    @pulumi.getter(name="httpCorrelationProtocol")
    def http_correlation_protocol(self) -> Optional[str]:
        """
        Sets correlation protocol to use for Application Insights diagnostics.
        """
        return pulumi.get(self, "http_correlation_protocol")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        Resource ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="logClientIp")
    def log_client_ip(self) -> Optional[bool]:
        """
        Log the ClientIP. Default is false.
        """
        return pulumi.get(self, "log_client_ip")

    @property
    @pulumi.getter(name="loggerId")
    def logger_id(self) -> str:
        """
        Resource Id of a target logger.
        """
        return pulumi.get(self, "logger_id")

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        Resource name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def sampling(self) -> Optional['outputs.SamplingSettingsResponse']:
        """
        Sampling settings for Diagnostic.
        """
        return pulumi.get(self, "sampling")

    @property
    @pulumi.getter
    def type(self) -> str:
        """
        Resource type for API Management resource.
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter
    def verbosity(self) -> Optional[str]:
        """
        The verbosity level applied to traces emitted by trace policies.
        """
        return pulumi.get(self, "verbosity")


class AwaitableGetDiagnosticResult(GetDiagnosticResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetDiagnosticResult(
            always_log=self.always_log,
            backend=self.backend,
            frontend=self.frontend,
            http_correlation_protocol=self.http_correlation_protocol,
            id=self.id,
            log_client_ip=self.log_client_ip,
            logger_id=self.logger_id,
            name=self.name,
            sampling=self.sampling,
            type=self.type,
            verbosity=self.verbosity)


def get_diagnostic(diagnostic_id: Optional[str] = None,
                   resource_group_name: Optional[str] = None,
                   service_name: Optional[str] = None,
                   opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetDiagnosticResult:
    """
    Use this data source to access information about an existing resource.

    :param str diagnostic_id: Diagnostic identifier. Must be unique in the current API Management service instance.
    :param str resource_group_name: The name of the resource group.
    :param str service_name: The name of the API Management service.
    """
    __args__ = dict()
    __args__['diagnosticId'] = diagnostic_id
    __args__['resourceGroupName'] = resource_group_name
    __args__['serviceName'] = service_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('azure-nextgen:apimanagement/latest:getDiagnostic', __args__, opts=opts, typ=GetDiagnosticResult).value

    return AwaitableGetDiagnosticResult(
        always_log=__ret__.always_log,
        backend=__ret__.backend,
        frontend=__ret__.frontend,
        http_correlation_protocol=__ret__.http_correlation_protocol,
        id=__ret__.id,
        log_client_ip=__ret__.log_client_ip,
        logger_id=__ret__.logger_id,
        name=__ret__.name,
        sampling=__ret__.sampling,
        type=__ret__.type,
        verbosity=__ret__.verbosity)
