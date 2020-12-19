// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AzureActiveDirectory.V20190101Preview.Outputs
{

    [OutputType]
    public sealed class B2CTenantResourcePropertiesResponseBillingConfig
    {
        /// <summary>
        /// The type of billing. Will be MAU for all new customers. If 'Auths', it can be updated to 'MAU'. Cannot be changed if value is 'MAU'. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling).
        /// </summary>
        public readonly string? BillingType;
        /// <summary>
        /// The data from which the billing type took effect
        /// </summary>
        public readonly string EffectiveStartDateUtc;

        [OutputConstructor]
        private B2CTenantResourcePropertiesResponseBillingConfig(
            string? billingType,

            string effectiveStartDateUtc)
        {
            BillingType = billingType;
            EffectiveStartDateUtc = effectiveStartDateUtc;
        }
    }
}
