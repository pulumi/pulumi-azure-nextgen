// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20201201.Outputs
{

    [OutputType]
    public sealed class IntegrationRuntimeSsisPropertiesResponse
    {
        /// <summary>
        /// Catalog information for managed dedicated integration runtime.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeSsisCatalogInfoResponse? CatalogInfo;
        /// <summary>
        /// Custom setup script properties for a managed dedicated integration runtime.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeCustomSetupScriptPropertiesResponse? CustomSetupScriptProperties;
        /// <summary>
        /// Data proxy properties for a managed dedicated integration runtime.
        /// </summary>
        public readonly Outputs.IntegrationRuntimeDataProxyPropertiesResponse? DataProxyProperties;
        /// <summary>
        /// The edition for the SSIS Integration Runtime
        /// </summary>
        public readonly string? Edition;
        /// <summary>
        /// Custom setup without script properties for a SSIS integration runtime.
        /// </summary>
        public readonly ImmutableArray<object> ExpressCustomSetupProperties;
        /// <summary>
        /// License type for bringing your own license scenario.
        /// </summary>
        public readonly string? LicenseType;

        [OutputConstructor]
        private IntegrationRuntimeSsisPropertiesResponse(
            Outputs.IntegrationRuntimeSsisCatalogInfoResponse? catalogInfo,

            Outputs.IntegrationRuntimeCustomSetupScriptPropertiesResponse? customSetupScriptProperties,

            Outputs.IntegrationRuntimeDataProxyPropertiesResponse? dataProxyProperties,

            string? edition,

            ImmutableArray<object> expressCustomSetupProperties,

            string? licenseType)
        {
            CatalogInfo = catalogInfo;
            CustomSetupScriptProperties = customSetupScriptProperties;
            DataProxyProperties = dataProxyProperties;
            Edition = edition;
            ExpressCustomSetupProperties = expressCustomSetupProperties;
            LicenseType = licenseType;
        }
    }
}
