// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20180601Preview
{
    public static class GetAuthorizationServer
    {
        public static Task<GetAuthorizationServerResult> InvokeAsync(GetAuthorizationServerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAuthorizationServerResult>("azure-nextgen:apimanagement/v20180601preview:getAuthorizationServer", args ?? new GetAuthorizationServerArgs(), options.WithVersion());
    }


    public sealed class GetAuthorizationServerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Identifier of the authorization server.
        /// </summary>
        [Input("authsid", required: true)]
        public string Authsid { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        public GetAuthorizationServerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAuthorizationServerResult
    {
        /// <summary>
        /// OAuth authorization endpoint. See http://tools.ietf.org/html/rfc6749#section-3.2.
        /// </summary>
        public readonly string AuthorizationEndpoint;
        /// <summary>
        /// HTTP verbs supported by the authorization endpoint. GET must be always present. POST is optional.
        /// </summary>
        public readonly ImmutableArray<string> AuthorizationMethods;
        /// <summary>
        /// Specifies the mechanism by which access token is passed to the API. 
        /// </summary>
        public readonly ImmutableArray<string> BearerTokenSendingMethods;
        /// <summary>
        /// Method of authentication supported by the token endpoint of this authorization server. Possible values are Basic and/or Body. When Body is specified, client credentials and other parameters are passed within the request body in the application/x-www-form-urlencoded format.
        /// </summary>
        public readonly ImmutableArray<string> ClientAuthenticationMethod;
        /// <summary>
        /// Client or app id registered with this authorization server.
        /// </summary>
        public readonly string ClientId;
        /// <summary>
        /// Optional reference to a page where client or app registration for this authorization server is performed. Contains absolute URL to entity being referenced.
        /// </summary>
        public readonly string ClientRegistrationEndpoint;
        /// <summary>
        /// Client or app secret registered with this authorization server.
        /// </summary>
        public readonly string? ClientSecret;
        /// <summary>
        /// Access token scope that is going to be requested by default. Can be overridden at the API level. Should be provided in the form of a string containing space-delimited values.
        /// </summary>
        public readonly string? DefaultScope;
        /// <summary>
        /// Description of the authorization server. Can contain HTML formatting tags.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// User-friendly authorization server name.
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Form of an authorization grant, which the client uses to request the access token.
        /// </summary>
        public readonly ImmutableArray<string> GrantTypes;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner password.
        /// </summary>
        public readonly string? ResourceOwnerPassword;
        /// <summary>
        /// Can be optionally specified when resource owner password grant type is supported by this authorization server. Default resource owner username.
        /// </summary>
        public readonly string? ResourceOwnerUsername;
        /// <summary>
        /// If true, authorization server will include state parameter from the authorization request to its response. Client may use state parameter to raise protocol security.
        /// </summary>
        public readonly bool? SupportState;
        /// <summary>
        /// Additional parameters required by the token endpoint of this authorization server represented as an array of JSON objects with name and value string properties, i.e. {"name" : "name value", "value": "a value"}.
        /// </summary>
        public readonly ImmutableArray<Outputs.TokenBodyParameterContractResponse> TokenBodyParameters;
        /// <summary>
        /// OAuth token endpoint. Contains absolute URI to entity being referenced.
        /// </summary>
        public readonly string? TokenEndpoint;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetAuthorizationServerResult(
            string authorizationEndpoint,

            ImmutableArray<string> authorizationMethods,

            ImmutableArray<string> bearerTokenSendingMethods,

            ImmutableArray<string> clientAuthenticationMethod,

            string clientId,

            string clientRegistrationEndpoint,

            string? clientSecret,

            string? defaultScope,

            string? description,

            string displayName,

            ImmutableArray<string> grantTypes,

            string id,

            string name,

            string? resourceOwnerPassword,

            string? resourceOwnerUsername,

            bool? supportState,

            ImmutableArray<Outputs.TokenBodyParameterContractResponse> tokenBodyParameters,

            string? tokenEndpoint,

            string type)
        {
            AuthorizationEndpoint = authorizationEndpoint;
            AuthorizationMethods = authorizationMethods;
            BearerTokenSendingMethods = bearerTokenSendingMethods;
            ClientAuthenticationMethod = clientAuthenticationMethod;
            ClientId = clientId;
            ClientRegistrationEndpoint = clientRegistrationEndpoint;
            ClientSecret = clientSecret;
            DefaultScope = defaultScope;
            Description = description;
            DisplayName = displayName;
            GrantTypes = grantTypes;
            Id = id;
            Name = name;
            ResourceOwnerPassword = resourceOwnerPassword;
            ResourceOwnerUsername = resourceOwnerUsername;
            SupportState = supportState;
            TokenBodyParameters = tokenBodyParameters;
            TokenEndpoint = tokenEndpoint;
            Type = type;
        }
    }
}
