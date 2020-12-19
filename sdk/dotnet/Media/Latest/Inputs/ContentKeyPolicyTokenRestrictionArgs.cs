// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.Latest.Inputs
{

    /// <summary>
    /// Represents a token restriction. Provided token must match these requirements for successful license or key delivery.
    /// </summary>
    public sealed class ContentKeyPolicyTokenRestrictionArgs : Pulumi.ResourceArgs
    {
        [Input("alternateVerificationKeys")]
        private InputList<Union<Inputs.ContentKeyPolicyRsaTokenKeyArgs, Union<Inputs.ContentKeyPolicySymmetricTokenKeyArgs, Inputs.ContentKeyPolicyX509CertificateTokenKeyArgs>>>? _alternateVerificationKeys;

        /// <summary>
        /// A list of alternative verification keys.
        /// </summary>
        public InputList<Union<Inputs.ContentKeyPolicyRsaTokenKeyArgs, Union<Inputs.ContentKeyPolicySymmetricTokenKeyArgs, Inputs.ContentKeyPolicyX509CertificateTokenKeyArgs>>> AlternateVerificationKeys
        {
            get => _alternateVerificationKeys ?? (_alternateVerificationKeys = new InputList<Union<Inputs.ContentKeyPolicyRsaTokenKeyArgs, Union<Inputs.ContentKeyPolicySymmetricTokenKeyArgs, Inputs.ContentKeyPolicyX509CertificateTokenKeyArgs>>>());
            set => _alternateVerificationKeys = value;
        }

        /// <summary>
        /// The audience for the token.
        /// </summary>
        [Input("audience", required: true)]
        public Input<string> Audience { get; set; } = null!;

        /// <summary>
        /// The token issuer.
        /// </summary>
        [Input("issuer", required: true)]
        public Input<string> Issuer { get; set; } = null!;

        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyTokenRestriction'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        /// <summary>
        /// The OpenID connect discovery document.
        /// </summary>
        [Input("openIdConnectDiscoveryDocument")]
        public Input<string>? OpenIdConnectDiscoveryDocument { get; set; }

        /// <summary>
        /// The primary verification key.
        /// </summary>
        [Input("primaryVerificationKey", required: true)]
        public InputUnion<Inputs.ContentKeyPolicyRsaTokenKeyArgs, InputUnion<Inputs.ContentKeyPolicySymmetricTokenKeyArgs, Inputs.ContentKeyPolicyX509CertificateTokenKeyArgs>> PrimaryVerificationKey { get; set; } = null!;

        [Input("requiredClaims")]
        private InputList<Inputs.ContentKeyPolicyTokenClaimArgs>? _requiredClaims;

        /// <summary>
        /// A list of required token claims.
        /// </summary>
        public InputList<Inputs.ContentKeyPolicyTokenClaimArgs> RequiredClaims
        {
            get => _requiredClaims ?? (_requiredClaims = new InputList<Inputs.ContentKeyPolicyTokenClaimArgs>());
            set => _requiredClaims = value;
        }

        /// <summary>
        /// The type of token.
        /// </summary>
        [Input("restrictionTokenType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Media.Latest.ContentKeyPolicyRestrictionTokenType> RestrictionTokenType { get; set; } = null!;

        public ContentKeyPolicyTokenRestrictionArgs()
        {
        }
    }
}
