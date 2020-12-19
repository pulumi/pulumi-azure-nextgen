// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201Preview
{
    /// <summary>
    /// A single API Management service resource in List or Get response.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:apimanagement/v20191201preview:ApiManagementService")]
    public partial class ApiManagementService : Pulumi.CustomResource
    {
        /// <summary>
        /// Additional datacenter locations of the API Management service.
        /// </summary>
        [Output("additionalLocations")]
        public Output<ImmutableArray<Outputs.AdditionalLocationResponse>> AdditionalLocations { get; private set; } = null!;

        /// <summary>
        /// Control Plane Apis version constraint for the API Management service.
        /// </summary>
        [Output("apiVersionConstraint")]
        public Output<Outputs.ApiVersionConstraintResponse?> ApiVersionConstraint { get; private set; } = null!;

        /// <summary>
        /// List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
        /// </summary>
        [Output("certificates")]
        public Output<ImmutableArray<Outputs.CertificateConfigurationResponse>> Certificates { get; private set; } = null!;

        /// <summary>
        /// Creation UTC date of the API Management service.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
        /// </summary>
        [Output("createdAtUtc")]
        public Output<string> CreatedAtUtc { get; private set; } = null!;

        /// <summary>
        /// Custom properties of the API Management service.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.&lt;/br&gt;Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1st 2018 and `False` otherwise. Http2 setting's default value is `False`.&lt;/br&gt;&lt;/br&gt;You can disable any of next ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.  Note: next ciphers can't be disabled since they are required by Azure CloudService internal components: TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384
        /// </summary>
        [Output("customProperties")]
        public Output<ImmutableDictionary<string, string>?> CustomProperties { get; private set; } = null!;

        /// <summary>
        /// DEveloper Portal endpoint URL of the API Management service.
        /// </summary>
        [Output("developerPortalUrl")]
        public Output<string> DeveloperPortalUrl { get; private set; } = null!;

        /// <summary>
        /// Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
        /// </summary>
        [Output("disableGateway")]
        public Output<bool?> DisableGateway { get; private set; } = null!;

        /// <summary>
        /// Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
        /// </summary>
        [Output("enableClientCertificate")]
        public Output<bool?> EnableClientCertificate { get; private set; } = null!;

        /// <summary>
        /// ETag of the resource.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// Gateway URL of the API Management service in the Default Region.
        /// </summary>
        [Output("gatewayRegionalUrl")]
        public Output<string> GatewayRegionalUrl { get; private set; } = null!;

        /// <summary>
        /// Gateway URL of the API Management service.
        /// </summary>
        [Output("gatewayUrl")]
        public Output<string> GatewayUrl { get; private set; } = null!;

        /// <summary>
        /// Custom hostname configuration of the API Management service.
        /// </summary>
        [Output("hostnameConfigurations")]
        public Output<ImmutableArray<Outputs.HostnameConfigurationResponse>> HostnameConfigurations { get; private set; } = null!;

        /// <summary>
        /// Managed service identity of the Api Management service.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.ApiManagementServiceIdentityResponse?> Identity { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Management API endpoint URL of the API Management service.
        /// </summary>
        [Output("managementApiUrl")]
        public Output<string> ManagementApiUrl { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Email address from which the notification will be sent.
        /// </summary>
        [Output("notificationSenderEmail")]
        public Output<string?> NotificationSenderEmail { get; private set; } = null!;

        /// <summary>
        /// Publisher portal endpoint Url of the API Management service.
        /// </summary>
        [Output("portalUrl")]
        public Output<string> PortalUrl { get; private set; } = null!;

        /// <summary>
        /// Private Static Load Balanced IP addresses of the API Management service in Primary region which is deployed in an Internal Virtual Network. Available only for Basic, Standard and Premium SKU.
        /// </summary>
        [Output("privateIPAddresses")]
        public Output<ImmutableArray<string>> PrivateIPAddresses { get; private set; } = null!;

        /// <summary>
        /// The current provisioning state of the API Management service which can be one of the following: Created/Activating/Succeeded/Updating/Failed/Stopped/Terminating/TerminationFailed/Deleted.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Public Static Load Balanced IP addresses of the API Management service in Primary region. Available only for Basic, Standard and Premium SKU.
        /// </summary>
        [Output("publicIPAddresses")]
        public Output<ImmutableArray<string>> PublicIPAddresses { get; private set; } = null!;

        /// <summary>
        /// Publisher email.
        /// </summary>
        [Output("publisherEmail")]
        public Output<string> PublisherEmail { get; private set; } = null!;

        /// <summary>
        /// Publisher name.
        /// </summary>
        [Output("publisherName")]
        public Output<string> PublisherName { get; private set; } = null!;

        /// <summary>
        /// SCM endpoint URL of the API Management service.
        /// </summary>
        [Output("scmUrl")]
        public Output<string> ScmUrl { get; private set; } = null!;

        /// <summary>
        /// SKU properties of the API Management service.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.ApiManagementServiceSkuPropertiesResponse> Sku { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the API Management service, which is targeted by the long running operation started on the service.
        /// </summary>
        [Output("targetProvisioningState")]
        public Output<string> TargetProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource type for API Management resource is set to Microsoft.ApiManagement.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Virtual network configuration of the API Management service.
        /// </summary>
        [Output("virtualNetworkConfiguration")]
        public Output<Outputs.VirtualNetworkConfigurationResponse?> VirtualNetworkConfiguration { get; private set; } = null!;

        /// <summary>
        /// The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
        /// </summary>
        [Output("virtualNetworkType")]
        public Output<string?> VirtualNetworkType { get; private set; } = null!;


        /// <summary>
        /// Create a ApiManagementService resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApiManagementService(string name, ApiManagementServiceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20191201preview:ApiManagementService", name, args ?? new ApiManagementServiceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApiManagementService(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:apimanagement/v20191201preview:ApiManagementService", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/latest:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20160707:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20161010:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20170301:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180101:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20180601preview:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20190101:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20191201:ApiManagementService"},
                    new Pulumi.Alias { Type = "azure-nextgen:apimanagement/v20200601preview:ApiManagementService"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApiManagementService resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApiManagementService Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApiManagementService(name, id, options);
        }
    }

    public sealed class ApiManagementServiceArgs : Pulumi.ResourceArgs
    {
        [Input("additionalLocations")]
        private InputList<Inputs.AdditionalLocationArgs>? _additionalLocations;

        /// <summary>
        /// Additional datacenter locations of the API Management service.
        /// </summary>
        public InputList<Inputs.AdditionalLocationArgs> AdditionalLocations
        {
            get => _additionalLocations ?? (_additionalLocations = new InputList<Inputs.AdditionalLocationArgs>());
            set => _additionalLocations = value;
        }

        /// <summary>
        /// Control Plane Apis version constraint for the API Management service.
        /// </summary>
        [Input("apiVersionConstraint")]
        public Input<Inputs.ApiVersionConstraintArgs>? ApiVersionConstraint { get; set; }

        [Input("certificates")]
        private InputList<Inputs.CertificateConfigurationArgs>? _certificates;

        /// <summary>
        /// List of Certificates that need to be installed in the API Management service. Max supported certificates that can be installed is 10.
        /// </summary>
        public InputList<Inputs.CertificateConfigurationArgs> Certificates
        {
            get => _certificates ?? (_certificates = new InputList<Inputs.CertificateConfigurationArgs>());
            set => _certificates = value;
        }

        [Input("customProperties")]
        private InputMap<string>? _customProperties;

        /// <summary>
        /// Custom properties of the API Management service.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TripleDes168` will disable the cipher TLS_RSA_WITH_3DES_EDE_CBC_SHA for all TLS(1.0, 1.1 and 1.2).&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls11` can be used to disable just TLS 1.1.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Protocols.Tls10` can be used to disable TLS 1.0 on an API Management service.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls11` can be used to disable just TLS 1.1 for communications with backends.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Backend.Protocols.Tls10` can be used to disable TLS 1.0 for communications with backends.&lt;/br&gt;Setting `Microsoft.WindowsAzure.ApiManagement.Gateway.Protocols.Server.Http2` can be used to enable HTTP2 protocol on an API Management service.&lt;/br&gt;Not specifying any of these properties on PATCH operation will reset omitted properties' values to their defaults. For all the settings except Http2 the default value is `True` if the service was created on or before April 1st 2018 and `False` otherwise. Http2 setting's default value is `False`.&lt;/br&gt;&lt;/br&gt;You can disable any of next ciphers by using settings `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.[cipher_name]`: TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA, TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA, TLS_RSA_WITH_AES_128_GCM_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA256, TLS_RSA_WITH_AES_128_CBC_SHA256, TLS_RSA_WITH_AES_256_CBC_SHA, TLS_RSA_WITH_AES_128_CBC_SHA. For example, `Microsoft.WindowsAzure.ApiManagement.Gateway.Security.Ciphers.TLS_RSA_WITH_AES_128_CBC_SHA256`:`false`. The default value is `true` for them.  Note: next ciphers can't be disabled since they are required by Azure CloudService internal components: TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256,TLS_RSA_WITH_AES_256_GCM_SHA384
        /// </summary>
        public InputMap<string> CustomProperties
        {
            get => _customProperties ?? (_customProperties = new InputMap<string>());
            set => _customProperties = value;
        }

        /// <summary>
        /// Property only valid for an Api Management service deployed in multiple locations. This can be used to disable the gateway in master region.
        /// </summary>
        [Input("disableGateway")]
        public Input<bool>? DisableGateway { get; set; }

        /// <summary>
        /// Property only meant to be used for Consumption SKU Service. This enforces a client certificate to be presented on each request to the gateway. This also enables the ability to authenticate the certificate in the policy on the gateway.
        /// </summary>
        [Input("enableClientCertificate")]
        public Input<bool>? EnableClientCertificate { get; set; }

        [Input("hostnameConfigurations")]
        private InputList<Inputs.HostnameConfigurationArgs>? _hostnameConfigurations;

        /// <summary>
        /// Custom hostname configuration of the API Management service.
        /// </summary>
        public InputList<Inputs.HostnameConfigurationArgs> HostnameConfigurations
        {
            get => _hostnameConfigurations ?? (_hostnameConfigurations = new InputList<Inputs.HostnameConfigurationArgs>());
            set => _hostnameConfigurations = value;
        }

        /// <summary>
        /// Managed service identity of the Api Management service.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.ApiManagementServiceIdentityArgs>? Identity { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Email address from which the notification will be sent.
        /// </summary>
        [Input("notificationSenderEmail")]
        public Input<string>? NotificationSenderEmail { get; set; }

        /// <summary>
        /// Publisher email.
        /// </summary>
        [Input("publisherEmail", required: true)]
        public Input<string> PublisherEmail { get; set; } = null!;

        /// <summary>
        /// Publisher name.
        /// </summary>
        [Input("publisherName", required: true)]
        public Input<string> PublisherName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        /// <summary>
        /// SKU properties of the API Management service.
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.ApiManagementServiceSkuPropertiesArgs> Sku { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Virtual network configuration of the API Management service.
        /// </summary>
        [Input("virtualNetworkConfiguration")]
        public Input<Inputs.VirtualNetworkConfigurationArgs>? VirtualNetworkConfiguration { get; set; }

        /// <summary>
        /// The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that API Management deployment is setup inside a Virtual Network having an Intranet Facing Endpoint only.
        /// </summary>
        [Input("virtualNetworkType")]
        public InputUnion<string, Pulumi.AzureNextGen.ApiManagement.V20191201Preview.VirtualNetworkType>? VirtualNetworkType { get; set; }

        public ApiManagementServiceArgs()
        {
        }
    }
}
