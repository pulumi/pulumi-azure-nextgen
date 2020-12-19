// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Outputs
{

    [OutputType]
    public sealed class SharePointOnlineListLinkedServiceResponse
    {
        /// <summary>
        /// List of tags that can be used for describing the linked service.
        /// </summary>
        public readonly ImmutableArray<object> Annotations;
        /// <summary>
        /// The integration runtime reference.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeReferenceResponse? ConnectVia;
        /// <summary>
        /// Linked service description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object? EncryptedCredential;
        /// <summary>
        /// Parameters for linked service.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? Parameters;
        /// <summary>
        /// The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object ServicePrincipalId;
        /// <summary>
        /// The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse> ServicePrincipalKey;
        /// <summary>
        /// The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object SiteUrl;
        /// <summary>
        /// The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string).
        /// </summary>
        public readonly object TenantId;
        /// <summary>
        /// Type of linked service.
        /// Expected value is 'SharePointOnlineList'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private SharePointOnlineListLinkedServiceResponse(
            ImmutableArray<object> annotations,

            Outputs.IntegrationRuntimeReferenceResponse? connectVia,

            string? description,

            object? encryptedCredential,

            ImmutableDictionary<string, Outputs.ParameterSpecificationResponse>? parameters,

            object servicePrincipalId,

            Union<Outputs.AzureKeyVaultSecretReferenceResponse, Outputs.SecureStringResponse> servicePrincipalKey,

            object siteUrl,

            object tenantId,

            string type)
        {
            Annotations = annotations;
            ConnectVia = connectVia;
            Description = description;
            EncryptedCredential = encryptedCredential;
            Parameters = parameters;
            ServicePrincipalId = servicePrincipalId;
            ServicePrincipalKey = servicePrincipalKey;
            SiteUrl = siteUrl;
            TenantId = tenantId;
            Type = type;
        }
    }
}
