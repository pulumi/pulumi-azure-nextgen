// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AzureActiveDirectory.V20190101Preview.Inputs
{

    public sealed class CreateTenantRequestBodyPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Country code of Azure tenant (e.g. 'US'). Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list.
        /// </summary>
        [Input("countryCode")]
        public Input<string>? CountryCode { get; set; }

        /// <summary>
        /// The display name of the B2C tenant.
        /// </summary>
        [Input("displayName")]
        public Input<string>? DisplayName { get; set; }

        public CreateTenantRequestBodyPropertiesArgs()
        {
        }
    }
}
