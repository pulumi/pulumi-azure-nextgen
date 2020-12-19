# coding=utf-8
# *** WARNING: this file was generated by the Pulumi SDK Generator. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from ._enums import *
from .api import *
from .api_diagnostic import *
from .api_issue import *
from .api_issue_attachment import *
from .api_issue_comment import *
from .api_management_service import *
from .api_operation import *
from .api_operation_policy import *
from .api_policy import *
from .api_release import *
from .api_schema import *
from .api_version_set import *
from .authorization_server import *
from .backend import *
from .cache import *
from .certificate import *
from .diagnostic import *
from .email_template import *
from .get_api import *
from .get_api_diagnostic import *
from .get_api_issue import *
from .get_api_issue_attachment import *
from .get_api_issue_comment import *
from .get_api_management_service import *
from .get_api_management_service_sso_token import *
from .get_api_operation import *
from .get_api_operation_policy import *
from .get_api_policy import *
from .get_api_release import *
from .get_api_schema import *
from .get_api_version_set import *
from .get_authorization_server import *
from .get_backend import *
from .get_cache import *
from .get_certificate import *
from .get_diagnostic import *
from .get_email_template import *
from .get_group import *
from .get_identity_provider import *
from .get_logger import *
from .get_open_id_connect_provider import *
from .get_policy import *
from .get_product import *
from .get_product_policy import *
from .get_property import *
from .get_subscription import *
from .get_tag import *
from .get_tag_by_api import *
from .get_tag_by_operation import *
from .get_tag_by_product import *
from .get_tag_description import *
from .get_user import *
from .group import *
from .group_user import *
from .identity_provider import *
from .logger import *
from .notification_recipient_email import *
from .notification_recipient_user import *
from .open_id_connect_provider import *
from .policy import *
from .product import *
from .product_api import *
from .product_group import *
from .product_policy import *
from .property import *
from .subscription import *
from .tag import *
from .tag_by_api import *
from .tag_by_operation import *
from .tag_by_product import *
from .tag_description import *
from .user import *
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
            if typ == "azure-nextgen:apimanagement/v20180601preview:Api":
                return Api(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiDiagnostic":
                return ApiDiagnostic(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiIssue":
                return ApiIssue(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiIssueAttachment":
                return ApiIssueAttachment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiIssueComment":
                return ApiIssueComment(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiManagementService":
                return ApiManagementService(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiOperation":
                return ApiOperation(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiOperationPolicy":
                return ApiOperationPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiPolicy":
                return ApiPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiRelease":
                return ApiRelease(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiSchema":
                return ApiSchema(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ApiVersionSet":
                return ApiVersionSet(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:AuthorizationServer":
                return AuthorizationServer(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Backend":
                return Backend(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Cache":
                return Cache(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Certificate":
                return Certificate(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Diagnostic":
                return Diagnostic(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:EmailTemplate":
                return EmailTemplate(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Group":
                return Group(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:GroupUser":
                return GroupUser(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:IdentityProvider":
                return IdentityProvider(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Logger":
                return Logger(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:NotificationRecipientEmail":
                return NotificationRecipientEmail(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:NotificationRecipientUser":
                return NotificationRecipientUser(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:OpenIdConnectProvider":
                return OpenIdConnectProvider(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Policy":
                return Policy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Product":
                return Product(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ProductApi":
                return ProductApi(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ProductGroup":
                return ProductGroup(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:ProductPolicy":
                return ProductPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Property":
                return Property(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Subscription":
                return Subscription(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:Tag":
                return Tag(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:TagByApi":
                return TagByApi(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:TagByOperation":
                return TagByOperation(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:TagByProduct":
                return TagByProduct(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:TagDescription":
                return TagDescription(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "azure-nextgen:apimanagement/v20180601preview:User":
                return User(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("azure-nextgen", "apimanagement/v20180601preview", _module_instance)

_register_module()
