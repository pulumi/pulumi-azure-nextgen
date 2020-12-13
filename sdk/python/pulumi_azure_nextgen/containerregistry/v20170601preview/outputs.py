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
    'ActorResponseResult',
    'EventContentResponseResult',
    'EventRequestMessageResponseResult',
    'EventResponseResult',
    'EventResponseMessageResponseResult',
    'RegistryPasswordResponseResult',
    'RequestResponseResult',
    'SkuResponse',
    'SourceResponseResult',
    'StatusResponse',
    'StorageAccountPropertiesResponse',
    'TargetResponseResult',
]

@pulumi.output_type
class ActorResponseResult(dict):
    """
    The agent that initiated the event. For most situations, this could be from the authorization context of the request.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None):
        """
        The agent that initiated the event. For most situations, this could be from the authorization context of the request.
        :param str name: The subject or username associated with the request context that generated the event.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The subject or username associated with the request context that generated the event.
        """
        return pulumi.get(self, "name")


@pulumi.output_type
class EventContentResponseResult(dict):
    """
    The content of the event request message.
    """
    def __init__(__self__, *,
                 action: Optional[str] = None,
                 actor: Optional['outputs.ActorResponseResult'] = None,
                 id: Optional[str] = None,
                 request: Optional['outputs.RequestResponseResult'] = None,
                 source: Optional['outputs.SourceResponseResult'] = None,
                 target: Optional['outputs.TargetResponseResult'] = None,
                 timestamp: Optional[str] = None):
        """
        The content of the event request message.
        :param str action: The action that encompasses the provided event.
        :param 'ActorResponseArgs' actor: The agent that initiated the event. For most situations, this could be from the authorization context of the request.
        :param str id: The event ID.
        :param 'RequestResponseArgs' request: The request that generated the event.
        :param 'SourceResponseArgs' source: The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
        :param 'TargetResponseArgs' target: The target of the event.
        :param str timestamp: The time at which the event occurred.
        """
        if action is not None:
            pulumi.set(__self__, "action", action)
        if actor is not None:
            pulumi.set(__self__, "actor", actor)
        if id is not None:
            pulumi.set(__self__, "id", id)
        if request is not None:
            pulumi.set(__self__, "request", request)
        if source is not None:
            pulumi.set(__self__, "source", source)
        if target is not None:
            pulumi.set(__self__, "target", target)
        if timestamp is not None:
            pulumi.set(__self__, "timestamp", timestamp)

    @property
    @pulumi.getter
    def action(self) -> Optional[str]:
        """
        The action that encompasses the provided event.
        """
        return pulumi.get(self, "action")

    @property
    @pulumi.getter
    def actor(self) -> Optional['outputs.ActorResponseResult']:
        """
        The agent that initiated the event. For most situations, this could be from the authorization context of the request.
        """
        return pulumi.get(self, "actor")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        The event ID.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def request(self) -> Optional['outputs.RequestResponseResult']:
        """
        The request that generated the event.
        """
        return pulumi.get(self, "request")

    @property
    @pulumi.getter
    def source(self) -> Optional['outputs.SourceResponseResult']:
        """
        The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
        """
        return pulumi.get(self, "source")

    @property
    @pulumi.getter
    def target(self) -> Optional['outputs.TargetResponseResult']:
        """
        The target of the event.
        """
        return pulumi.get(self, "target")

    @property
    @pulumi.getter
    def timestamp(self) -> Optional[str]:
        """
        The time at which the event occurred.
        """
        return pulumi.get(self, "timestamp")


@pulumi.output_type
class EventRequestMessageResponseResult(dict):
    """
    The event request message sent to the service URI.
    """
    def __init__(__self__, *,
                 content: Optional['outputs.EventContentResponseResult'] = None,
                 headers: Optional[Mapping[str, str]] = None,
                 method: Optional[str] = None,
                 request_uri: Optional[str] = None,
                 version: Optional[str] = None):
        """
        The event request message sent to the service URI.
        :param 'EventContentResponseArgs' content: The content of the event request message.
        :param Mapping[str, str] headers: The headers of the event request message.
        :param str method: The HTTP method used to send the event request message.
        :param str request_uri: The URI used to send the event request message.
        :param str version: The HTTP message version.
        """
        if content is not None:
            pulumi.set(__self__, "content", content)
        if headers is not None:
            pulumi.set(__self__, "headers", headers)
        if method is not None:
            pulumi.set(__self__, "method", method)
        if request_uri is not None:
            pulumi.set(__self__, "request_uri", request_uri)
        if version is not None:
            pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter
    def content(self) -> Optional['outputs.EventContentResponseResult']:
        """
        The content of the event request message.
        """
        return pulumi.get(self, "content")

    @property
    @pulumi.getter
    def headers(self) -> Optional[Mapping[str, str]]:
        """
        The headers of the event request message.
        """
        return pulumi.get(self, "headers")

    @property
    @pulumi.getter
    def method(self) -> Optional[str]:
        """
        The HTTP method used to send the event request message.
        """
        return pulumi.get(self, "method")

    @property
    @pulumi.getter(name="requestUri")
    def request_uri(self) -> Optional[str]:
        """
        The URI used to send the event request message.
        """
        return pulumi.get(self, "request_uri")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        """
        The HTTP message version.
        """
        return pulumi.get(self, "version")


@pulumi.output_type
class EventResponseResult(dict):
    """
    The event for a webhook.
    """
    def __init__(__self__, *,
                 event_request_message: Optional['outputs.EventRequestMessageResponseResult'] = None,
                 event_response_message: Optional['outputs.EventResponseMessageResponseResult'] = None,
                 id: Optional[str] = None):
        """
        The event for a webhook.
        :param 'EventRequestMessageResponseArgs' event_request_message: The event request message sent to the service URI.
        :param 'EventResponseMessageResponseArgs' event_response_message: The event response message received from the service URI.
        :param str id: The event ID.
        """
        if event_request_message is not None:
            pulumi.set(__self__, "event_request_message", event_request_message)
        if event_response_message is not None:
            pulumi.set(__self__, "event_response_message", event_response_message)
        if id is not None:
            pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter(name="eventRequestMessage")
    def event_request_message(self) -> Optional['outputs.EventRequestMessageResponseResult']:
        """
        The event request message sent to the service URI.
        """
        return pulumi.get(self, "event_request_message")

    @property
    @pulumi.getter(name="eventResponseMessage")
    def event_response_message(self) -> Optional['outputs.EventResponseMessageResponseResult']:
        """
        The event response message received from the service URI.
        """
        return pulumi.get(self, "event_response_message")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        The event ID.
        """
        return pulumi.get(self, "id")


@pulumi.output_type
class EventResponseMessageResponseResult(dict):
    """
    The event response message received from the service URI.
    """
    def __init__(__self__, *,
                 content: Optional[str] = None,
                 headers: Optional[Mapping[str, str]] = None,
                 reason_phrase: Optional[str] = None,
                 status_code: Optional[str] = None,
                 version: Optional[str] = None):
        """
        The event response message received from the service URI.
        :param str content: The content of the event response message.
        :param Mapping[str, str] headers: The headers of the event response message.
        :param str reason_phrase: The reason phrase of the event response message.
        :param str status_code: The status code of the event response message.
        :param str version: The HTTP message version.
        """
        if content is not None:
            pulumi.set(__self__, "content", content)
        if headers is not None:
            pulumi.set(__self__, "headers", headers)
        if reason_phrase is not None:
            pulumi.set(__self__, "reason_phrase", reason_phrase)
        if status_code is not None:
            pulumi.set(__self__, "status_code", status_code)
        if version is not None:
            pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter
    def content(self) -> Optional[str]:
        """
        The content of the event response message.
        """
        return pulumi.get(self, "content")

    @property
    @pulumi.getter
    def headers(self) -> Optional[Mapping[str, str]]:
        """
        The headers of the event response message.
        """
        return pulumi.get(self, "headers")

    @property
    @pulumi.getter(name="reasonPhrase")
    def reason_phrase(self) -> Optional[str]:
        """
        The reason phrase of the event response message.
        """
        return pulumi.get(self, "reason_phrase")

    @property
    @pulumi.getter(name="statusCode")
    def status_code(self) -> Optional[str]:
        """
        The status code of the event response message.
        """
        return pulumi.get(self, "status_code")

    @property
    @pulumi.getter
    def version(self) -> Optional[str]:
        """
        The HTTP message version.
        """
        return pulumi.get(self, "version")


@pulumi.output_type
class RegistryPasswordResponseResult(dict):
    """
    The login password for the container registry.
    """
    def __init__(__self__, *,
                 name: Optional[str] = None,
                 value: Optional[str] = None):
        """
        The login password for the container registry.
        :param str name: The password name.
        :param str value: The password value.
        """
        if name is not None:
            pulumi.set(__self__, "name", name)
        if value is not None:
            pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[str]:
        """
        The password name.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def value(self) -> Optional[str]:
        """
        The password value.
        """
        return pulumi.get(self, "value")


@pulumi.output_type
class RequestResponseResult(dict):
    """
    The request that generated the event.
    """
    def __init__(__self__, *,
                 addr: Optional[str] = None,
                 host: Optional[str] = None,
                 id: Optional[str] = None,
                 method: Optional[str] = None,
                 useragent: Optional[str] = None):
        """
        The request that generated the event.
        :param str addr: The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
        :param str host: The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
        :param str id: The ID of the request that initiated the event.
        :param str method: The request method that generated the event.
        :param str useragent: The user agent header of the request.
        """
        if addr is not None:
            pulumi.set(__self__, "addr", addr)
        if host is not None:
            pulumi.set(__self__, "host", host)
        if id is not None:
            pulumi.set(__self__, "id", id)
        if method is not None:
            pulumi.set(__self__, "method", method)
        if useragent is not None:
            pulumi.set(__self__, "useragent", useragent)

    @property
    @pulumi.getter
    def addr(self) -> Optional[str]:
        """
        The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request.
        """
        return pulumi.get(self, "addr")

    @property
    @pulumi.getter
    def host(self) -> Optional[str]:
        """
        The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests.
        """
        return pulumi.get(self, "host")

    @property
    @pulumi.getter
    def id(self) -> Optional[str]:
        """
        The ID of the request that initiated the event.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter
    def method(self) -> Optional[str]:
        """
        The request method that generated the event.
        """
        return pulumi.get(self, "method")

    @property
    @pulumi.getter
    def useragent(self) -> Optional[str]:
        """
        The user agent header of the request.
        """
        return pulumi.get(self, "useragent")


@pulumi.output_type
class SkuResponse(dict):
    """
    The SKU of a container registry.
    """
    def __init__(__self__, *,
                 name: str,
                 tier: str):
        """
        The SKU of a container registry.
        :param str name: The SKU name of the container registry. Required for registry creation.
        :param str tier: The SKU tier based on the SKU name.
        """
        pulumi.set(__self__, "name", name)
        pulumi.set(__self__, "tier", tier)

    @property
    @pulumi.getter
    def name(self) -> str:
        """
        The SKU name of the container registry. Required for registry creation.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def tier(self) -> str:
        """
        The SKU tier based on the SKU name.
        """
        return pulumi.get(self, "tier")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class SourceResponseResult(dict):
    """
    The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
    """
    def __init__(__self__, *,
                 addr: Optional[str] = None,
                 instance_id: Optional[str] = None):
        """
        The registry node that generated the event. Put differently, while the actor initiates the event, the source generates it.
        :param str addr: The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
        :param str instance_id: The running instance of an application. Changes after each restart.
        """
        if addr is not None:
            pulumi.set(__self__, "addr", addr)
        if instance_id is not None:
            pulumi.set(__self__, "instance_id", instance_id)

    @property
    @pulumi.getter
    def addr(self) -> Optional[str]:
        """
        The IP or hostname and the port of the registry node that generated the event. Generally, this will be resolved by os.Hostname() along with the running port.
        """
        return pulumi.get(self, "addr")

    @property
    @pulumi.getter(name="instanceID")
    def instance_id(self) -> Optional[str]:
        """
        The running instance of an application. Changes after each restart.
        """
        return pulumi.get(self, "instance_id")


@pulumi.output_type
class StatusResponse(dict):
    """
    The status of an Azure resource at the time the operation was called.
    """
    def __init__(__self__, *,
                 display_status: str,
                 message: str,
                 timestamp: str):
        """
        The status of an Azure resource at the time the operation was called.
        :param str display_status: The short label for the status.
        :param str message: The detailed message for the status, including alerts and error messages.
        :param str timestamp: The timestamp when the status was changed to the current value.
        """
        pulumi.set(__self__, "display_status", display_status)
        pulumi.set(__self__, "message", message)
        pulumi.set(__self__, "timestamp", timestamp)

    @property
    @pulumi.getter(name="displayStatus")
    def display_status(self) -> str:
        """
        The short label for the status.
        """
        return pulumi.get(self, "display_status")

    @property
    @pulumi.getter
    def message(self) -> str:
        """
        The detailed message for the status, including alerts and error messages.
        """
        return pulumi.get(self, "message")

    @property
    @pulumi.getter
    def timestamp(self) -> str:
        """
        The timestamp when the status was changed to the current value.
        """
        return pulumi.get(self, "timestamp")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class StorageAccountPropertiesResponse(dict):
    """
    The properties of a storage account for a container registry. Only applicable to Basic SKU.
    """
    def __init__(__self__, *,
                 id: str):
        """
        The properties of a storage account for a container registry. Only applicable to Basic SKU.
        :param str id: The resource ID of the storage account.
        """
        pulumi.set(__self__, "id", id)

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The resource ID of the storage account.
        """
        return pulumi.get(self, "id")

    def _translate_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop


@pulumi.output_type
class TargetResponseResult(dict):
    """
    The target of the event.
    """
    def __init__(__self__, *,
                 digest: Optional[str] = None,
                 length: Optional[int] = None,
                 media_type: Optional[str] = None,
                 repository: Optional[str] = None,
                 size: Optional[int] = None,
                 tag: Optional[str] = None,
                 url: Optional[str] = None):
        """
        The target of the event.
        :param str digest: The digest of the content, as defined by the Registry V2 HTTP API Specification.
        :param int length: The number of bytes of the content. Same as Size field.
        :param str media_type: The MIME type of the referenced object.
        :param str repository: The repository name.
        :param int size: The number of bytes of the content. Same as Length field.
        :param str tag: The tag name.
        :param str url: The direct URL to the content.
        """
        if digest is not None:
            pulumi.set(__self__, "digest", digest)
        if length is not None:
            pulumi.set(__self__, "length", length)
        if media_type is not None:
            pulumi.set(__self__, "media_type", media_type)
        if repository is not None:
            pulumi.set(__self__, "repository", repository)
        if size is not None:
            pulumi.set(__self__, "size", size)
        if tag is not None:
            pulumi.set(__self__, "tag", tag)
        if url is not None:
            pulumi.set(__self__, "url", url)

    @property
    @pulumi.getter
    def digest(self) -> Optional[str]:
        """
        The digest of the content, as defined by the Registry V2 HTTP API Specification.
        """
        return pulumi.get(self, "digest")

    @property
    @pulumi.getter
    def length(self) -> Optional[int]:
        """
        The number of bytes of the content. Same as Size field.
        """
        return pulumi.get(self, "length")

    @property
    @pulumi.getter(name="mediaType")
    def media_type(self) -> Optional[str]:
        """
        The MIME type of the referenced object.
        """
        return pulumi.get(self, "media_type")

    @property
    @pulumi.getter
    def repository(self) -> Optional[str]:
        """
        The repository name.
        """
        return pulumi.get(self, "repository")

    @property
    @pulumi.getter
    def size(self) -> Optional[int]:
        """
        The number of bytes of the content. Same as Length field.
        """
        return pulumi.get(self, "size")

    @property
    @pulumi.getter
    def tag(self) -> Optional[str]:
        """
        The tag name.
        """
        return pulumi.get(self, "tag")

    @property
    @pulumi.getter
    def url(self) -> Optional[str]:
        """
        The direct URL to the content.
        """
        return pulumi.get(self, "url")


