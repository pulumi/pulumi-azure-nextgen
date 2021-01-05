// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AppPlatform.V20201101Preview.Outputs
{

    [OutputType]
    public sealed class BindingResourcePropertiesResponse
    {
        /// <summary>
        /// Binding parameters of the Binding resource
        /// </summary>
        public readonly ImmutableDictionary<string, object>? BindingParameters;
        /// <summary>
        /// Creation time of the Binding resource
        /// </summary>
        public readonly string CreatedAt;
        /// <summary>
        /// The generated Spring Boot property file for this binding. The secret will be deducted.
        /// </summary>
        public readonly string GeneratedProperties;
        /// <summary>
        /// The key of the bound resource
        /// </summary>
        public readonly string? Key;
        /// <summary>
        /// The Azure resource id of the bound resource
        /// </summary>
        public readonly string? ResourceId;
        /// <summary>
        /// The name of the bound resource
        /// </summary>
        public readonly string ResourceName;
        /// <summary>
        /// The standard Azure resource type of the bound resource
        /// </summary>
        public readonly string ResourceType;
        /// <summary>
        /// Update time of the Binding resource
        /// </summary>
        public readonly string UpdatedAt;

        [OutputConstructor]
        private BindingResourcePropertiesResponse(
            ImmutableDictionary<string, object>? bindingParameters,

            string createdAt,

            string generatedProperties,

            string? key,

            string? resourceId,

            string resourceName,

            string resourceType,

            string updatedAt)
        {
            BindingParameters = bindingParameters;
            CreatedAt = createdAt;
            GeneratedProperties = generatedProperties;
            Key = key;
            ResourceId = resourceId;
            ResourceName = resourceName;
            ResourceType = resourceType;
            UpdatedAt = updatedAt;
        }
    }
}
