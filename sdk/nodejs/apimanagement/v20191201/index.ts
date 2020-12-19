// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./api";
export * from "./apiDiagnostic";
export * from "./apiIssue";
export * from "./apiIssueAttachment";
export * from "./apiIssueComment";
export * from "./apiManagementService";
export * from "./apiOperation";
export * from "./apiOperationPolicy";
export * from "./apiPolicy";
export * from "./apiRelease";
export * from "./apiSchema";
export * from "./apiTagDescription";
export * from "./apiVersionSet";
export * from "./authorizationServer";
export * from "./backend";
export * from "./cache";
export * from "./certificate";
export * from "./contentItem";
export * from "./contentType";
export * from "./diagnostic";
export * from "./emailTemplate";
export * from "./gateway";
export * from "./gatewayApiEntityTag";
export * from "./gatewayHostnameConfiguration";
export * from "./getApi";
export * from "./getApiDiagnostic";
export * from "./getApiIssue";
export * from "./getApiIssueAttachment";
export * from "./getApiIssueComment";
export * from "./getApiManagementService";
export * from "./getApiManagementServiceSsoToken";
export * from "./getApiOperation";
export * from "./getApiOperationPolicy";
export * from "./getApiPolicy";
export * from "./getApiRelease";
export * from "./getApiSchema";
export * from "./getApiTagDescription";
export * from "./getApiVersionSet";
export * from "./getAuthorizationServer";
export * from "./getBackend";
export * from "./getCache";
export * from "./getCertificate";
export * from "./getContentItem";
export * from "./getContentType";
export * from "./getDiagnostic";
export * from "./getEmailTemplate";
export * from "./getGateway";
export * from "./getGatewayHostnameConfiguration";
export * from "./getGroup";
export * from "./getIdentityProvider";
export * from "./getLogger";
export * from "./getNamedValue";
export * from "./getOpenIdConnectProvider";
export * from "./getPolicy";
export * from "./getProduct";
export * from "./getProductPolicy";
export * from "./getSubscription";
export * from "./getTag";
export * from "./getTagByApi";
export * from "./getTagByOperation";
export * from "./getTagByProduct";
export * from "./getUser";
export * from "./group";
export * from "./groupUser";
export * from "./identityProvider";
export * from "./listAuthorizationServerSecrets";
export * from "./listDelegationSettingSecrets";
export * from "./listGatewayKeys";
export * from "./listIdentityProviderSecrets";
export * from "./listNamedValue";
export * from "./listOpenIdConnectProviderSecrets";
export * from "./listSubscriptionSecrets";
export * from "./listTenantAccessGitSecrets";
export * from "./listTenantAccessSecrets";
export * from "./logger";
export * from "./namedValue";
export * from "./notificationRecipientEmail";
export * from "./notificationRecipientUser";
export * from "./openIdConnectProvider";
export * from "./policy";
export * from "./product";
export * from "./productApi";
export * from "./productGroup";
export * from "./productPolicy";
export * from "./subscription";
export * from "./tag";
export * from "./tagByApi";
export * from "./tagByOperation";
export * from "./tagByProduct";
export * from "./user";

// Export enums:
export * from "../../types/enums/apimanagement/v20191201";

// Import resources to register:
import { Api } from "./api";
import { ApiDiagnostic } from "./apiDiagnostic";
import { ApiIssue } from "./apiIssue";
import { ApiIssueAttachment } from "./apiIssueAttachment";
import { ApiIssueComment } from "./apiIssueComment";
import { ApiManagementService } from "./apiManagementService";
import { ApiOperation } from "./apiOperation";
import { ApiOperationPolicy } from "./apiOperationPolicy";
import { ApiPolicy } from "./apiPolicy";
import { ApiRelease } from "./apiRelease";
import { ApiSchema } from "./apiSchema";
import { ApiTagDescription } from "./apiTagDescription";
import { ApiVersionSet } from "./apiVersionSet";
import { AuthorizationServer } from "./authorizationServer";
import { Backend } from "./backend";
import { Cache } from "./cache";
import { Certificate } from "./certificate";
import { ContentItem } from "./contentItem";
import { ContentType } from "./contentType";
import { Diagnostic } from "./diagnostic";
import { EmailTemplate } from "./emailTemplate";
import { Gateway } from "./gateway";
import { GatewayApiEntityTag } from "./gatewayApiEntityTag";
import { GatewayHostnameConfiguration } from "./gatewayHostnameConfiguration";
import { Group } from "./group";
import { GroupUser } from "./groupUser";
import { IdentityProvider } from "./identityProvider";
import { Logger } from "./logger";
import { NamedValue } from "./namedValue";
import { NotificationRecipientEmail } from "./notificationRecipientEmail";
import { NotificationRecipientUser } from "./notificationRecipientUser";
import { OpenIdConnectProvider } from "./openIdConnectProvider";
import { Policy } from "./policy";
import { Product } from "./product";
import { ProductApi } from "./productApi";
import { ProductGroup } from "./productGroup";
import { ProductPolicy } from "./productPolicy";
import { Subscription } from "./subscription";
import { Tag } from "./tag";
import { TagByApi } from "./tagByApi";
import { TagByOperation } from "./tagByOperation";
import { TagByProduct } from "./tagByProduct";
import { User } from "./user";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:apimanagement/v20191201:Api":
                return new Api(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiDiagnostic":
                return new ApiDiagnostic(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiIssue":
                return new ApiIssue(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiIssueAttachment":
                return new ApiIssueAttachment(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiIssueComment":
                return new ApiIssueComment(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiManagementService":
                return new ApiManagementService(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiOperation":
                return new ApiOperation(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiOperationPolicy":
                return new ApiOperationPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiPolicy":
                return new ApiPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiRelease":
                return new ApiRelease(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiSchema":
                return new ApiSchema(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiTagDescription":
                return new ApiTagDescription(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ApiVersionSet":
                return new ApiVersionSet(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:AuthorizationServer":
                return new AuthorizationServer(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Backend":
                return new Backend(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Cache":
                return new Cache(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Certificate":
                return new Certificate(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ContentItem":
                return new ContentItem(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ContentType":
                return new ContentType(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Diagnostic":
                return new Diagnostic(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:EmailTemplate":
                return new EmailTemplate(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Gateway":
                return new Gateway(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:GatewayApiEntityTag":
                return new GatewayApiEntityTag(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:GatewayHostnameConfiguration":
                return new GatewayHostnameConfiguration(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Group":
                return new Group(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:GroupUser":
                return new GroupUser(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:IdentityProvider":
                return new IdentityProvider(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Logger":
                return new Logger(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:NamedValue":
                return new NamedValue(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:NotificationRecipientEmail":
                return new NotificationRecipientEmail(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:NotificationRecipientUser":
                return new NotificationRecipientUser(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:OpenIdConnectProvider":
                return new OpenIdConnectProvider(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Product":
                return new Product(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ProductApi":
                return new ProductApi(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ProductGroup":
                return new ProductGroup(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:ProductPolicy":
                return new ProductPolicy(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Subscription":
                return new Subscription(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:Tag":
                return new Tag(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:TagByApi":
                return new TagByApi(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:TagByOperation":
                return new TagByOperation(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:TagByProduct":
                return new TagByProduct(name, <any>undefined, { urn })
            case "azure-nextgen:apimanagement/v20191201:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "apimanagement/v20191201", _module)
