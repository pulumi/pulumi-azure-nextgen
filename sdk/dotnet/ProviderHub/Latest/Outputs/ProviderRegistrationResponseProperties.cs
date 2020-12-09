// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.Latest.Outputs
{

    [OutputType]
    public sealed class ProviderRegistrationResponseProperties
    {
        public readonly ImmutableArray<Outputs.ResourceProviderCapabilitiesResponse> Capabilities;
        public readonly Outputs.ResourceProviderManifestPropertiesResponseFeaturesRule? FeaturesRule;
        public readonly Outputs.ResourceProviderManifestPropertiesResponseManagement? Management;
        public readonly object? Metadata;
        public readonly string? Namespace;
        public readonly Outputs.ResourceProviderManifestPropertiesResponseProviderAuthentication? ProviderAuthentication;
        public readonly ImmutableArray<Outputs.ResourceProviderAuthorizationResponse> ProviderAuthorizations;
        public readonly Outputs.ProviderRegistrationPropertiesResponseProviderHubMetadata? ProviderHubMetadata;
        public readonly string? ProviderType;
        public readonly string? ProviderVersion;
        public readonly string? ProvisioningState;
        public readonly Outputs.ResourceProviderManifestPropertiesResponseRequestHeaderOptions? RequestHeaderOptions;
        public readonly ImmutableArray<string> RequiredFeatures;
        public readonly Outputs.ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications? SubscriptionLifecycleNotificationSpecifications;
        public readonly Outputs.ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions? TemplateDeploymentOptions;

        [OutputConstructor]
        private ProviderRegistrationResponseProperties(
            ImmutableArray<Outputs.ResourceProviderCapabilitiesResponse> capabilities,

            Outputs.ResourceProviderManifestPropertiesResponseFeaturesRule? featuresRule,

            Outputs.ResourceProviderManifestPropertiesResponseManagement? management,

            object? metadata,

            string? @namespace,

            Outputs.ResourceProviderManifestPropertiesResponseProviderAuthentication? providerAuthentication,

            ImmutableArray<Outputs.ResourceProviderAuthorizationResponse> providerAuthorizations,

            Outputs.ProviderRegistrationPropertiesResponseProviderHubMetadata? providerHubMetadata,

            string? providerType,

            string? providerVersion,

            string? provisioningState,

            Outputs.ResourceProviderManifestPropertiesResponseRequestHeaderOptions? requestHeaderOptions,

            ImmutableArray<string> requiredFeatures,

            Outputs.ProviderRegistrationPropertiesResponseSubscriptionLifecycleNotificationSpecifications? subscriptionLifecycleNotificationSpecifications,

            Outputs.ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions? templateDeploymentOptions)
        {
            Capabilities = capabilities;
            FeaturesRule = featuresRule;
            Management = management;
            Metadata = metadata;
            Namespace = @namespace;
            ProviderAuthentication = providerAuthentication;
            ProviderAuthorizations = providerAuthorizations;
            ProviderHubMetadata = providerHubMetadata;
            ProviderType = providerType;
            ProviderVersion = providerVersion;
            ProvisioningState = provisioningState;
            RequestHeaderOptions = requestHeaderOptions;
            RequiredFeatures = requiredFeatures;
            SubscriptionLifecycleNotificationSpecifications = subscriptionLifecycleNotificationSpecifications;
            TemplateDeploymentOptions = templateDeploymentOptions;
        }
    }
}