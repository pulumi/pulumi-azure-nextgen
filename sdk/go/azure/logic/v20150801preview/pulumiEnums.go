// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150801preview

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The agreement type.
type AgreementType pulumi.String

const (
	AgreementTypeNotSpecified = AgreementType("NotSpecified")
	AgreementTypeAS2          = AgreementType("AS2")
	AgreementTypeX12          = AgreementType("X12")
	AgreementTypeEdifact      = AgreementType("Edifact")
)

func (AgreementType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AgreementType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AgreementType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AgreementType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AgreementType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The EDIFACT frame setting characterSet.
type EdifactCharacterSet pulumi.String

const (
	EdifactCharacterSetNotSpecified = EdifactCharacterSet("NotSpecified")
	EdifactCharacterSetUNOB         = EdifactCharacterSet("UNOB")
	EdifactCharacterSetUNOA         = EdifactCharacterSet("UNOA")
	EdifactCharacterSetUNOC         = EdifactCharacterSet("UNOC")
	EdifactCharacterSetUNOD         = EdifactCharacterSet("UNOD")
	EdifactCharacterSetUNOE         = EdifactCharacterSet("UNOE")
	EdifactCharacterSetUNOF         = EdifactCharacterSet("UNOF")
	EdifactCharacterSetUNOG         = EdifactCharacterSet("UNOG")
	EdifactCharacterSetUNOH         = EdifactCharacterSet("UNOH")
	EdifactCharacterSetUNOI         = EdifactCharacterSet("UNOI")
	EdifactCharacterSetUNOJ         = EdifactCharacterSet("UNOJ")
	EdifactCharacterSetUNOK         = EdifactCharacterSet("UNOK")
	EdifactCharacterSetUNOX         = EdifactCharacterSet("UNOX")
	EdifactCharacterSetUNOY         = EdifactCharacterSet("UNOY")
	EdifactCharacterSetKECA         = EdifactCharacterSet("KECA")
)

func (EdifactCharacterSet) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EdifactCharacterSet) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EdifactCharacterSet) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EdifactCharacterSet) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EdifactCharacterSet) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The EDIFACT frame setting decimal indicator.
type EdifactDecimalIndicator pulumi.String

const (
	EdifactDecimalIndicatorNotSpecified = EdifactDecimalIndicator("NotSpecified")
	EdifactDecimalIndicatorComma        = EdifactDecimalIndicator("Comma")
	EdifactDecimalIndicatorDecimal      = EdifactDecimalIndicator("Decimal")
)

func (EdifactDecimalIndicator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EdifactDecimalIndicator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EdifactDecimalIndicator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EdifactDecimalIndicator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EdifactDecimalIndicator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The encryption algorithm.
type EncryptionAlgorithm pulumi.String

const (
	EncryptionAlgorithmNotSpecified = EncryptionAlgorithm("NotSpecified")
	EncryptionAlgorithmNone         = EncryptionAlgorithm("None")
	EncryptionAlgorithmDES3         = EncryptionAlgorithm("DES3")
	EncryptionAlgorithmRC2          = EncryptionAlgorithm("RC2")
	EncryptionAlgorithmAES128       = EncryptionAlgorithm("AES128")
	EncryptionAlgorithmAES192       = EncryptionAlgorithm("AES192")
	EncryptionAlgorithmAES256       = EncryptionAlgorithm("AES256")
)

func (EncryptionAlgorithm) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EncryptionAlgorithm) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EncryptionAlgorithm) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EncryptionAlgorithm) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EncryptionAlgorithm) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The signing or hashing algorithm.
type HashingAlgorithm pulumi.String

const (
	HashingAlgorithmNotSpecified = HashingAlgorithm("NotSpecified")
	HashingAlgorithmNone         = HashingAlgorithm("None")
	HashingAlgorithmSHA2256      = HashingAlgorithm("SHA2256")
	HashingAlgorithmSHA2384      = HashingAlgorithm("SHA2384")
	HashingAlgorithmSHA2512      = HashingAlgorithm("SHA2512")
)

func (HashingAlgorithm) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e HashingAlgorithm) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e HashingAlgorithm) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e HashingAlgorithm) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e HashingAlgorithm) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The map type.
type MapType pulumi.String

const (
	MapTypeNotSpecified = MapType("NotSpecified")
	MapTypeXslt         = MapType("Xslt")
)

func (MapType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e MapType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e MapType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e MapType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e MapType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The message filter type.
type MessageFilterType pulumi.String

const (
	MessageFilterTypeNotSpecified = MessageFilterType("NotSpecified")
	MessageFilterTypeInclude      = MessageFilterType("Include")
	MessageFilterTypeExclude      = MessageFilterType("Exclude")
)

func (MessageFilterType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e MessageFilterType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e MessageFilterType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e MessageFilterType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e MessageFilterType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The partner type.
type PartnerType pulumi.String

const (
	PartnerTypeNotSpecified = PartnerType("NotSpecified")
	PartnerTypeB2B          = PartnerType("B2B")
)

func (PartnerType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e PartnerType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e PartnerType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e PartnerType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e PartnerType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The schema type.
type SchemaType pulumi.String

const (
	SchemaTypeNotSpecified = SchemaType("NotSpecified")
	SchemaTypeXml          = SchemaType("Xml")
)

func (SchemaType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SchemaType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SchemaType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SchemaType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SchemaType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The segment terminator suffix.
type SegmentTerminatorSuffix pulumi.String

const (
	SegmentTerminatorSuffixNotSpecified = SegmentTerminatorSuffix("NotSpecified")
	SegmentTerminatorSuffixNone         = SegmentTerminatorSuffix("None")
	SegmentTerminatorSuffixCR           = SegmentTerminatorSuffix("CR")
	SegmentTerminatorSuffixLF           = SegmentTerminatorSuffix("LF")
	SegmentTerminatorSuffixCRLF         = SegmentTerminatorSuffix("CRLF")
)

func (SegmentTerminatorSuffix) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SegmentTerminatorSuffix) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SegmentTerminatorSuffix) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SegmentTerminatorSuffix) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SegmentTerminatorSuffix) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The sku name.
type SkuName pulumi.String

const (
	SkuNameNotSpecified = SkuName("NotSpecified")
	SkuNameFree         = SkuName("Free")
	SkuNameShared       = SkuName("Shared")
	SkuNameBasic        = SkuName("Basic")
	SkuNameStandard     = SkuName("Standard")
	SkuNamePremium      = SkuName("Premium")
)

func (SkuName) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuName) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuName) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuName) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuName) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The trailing separator policy.
type TrailingSeparatorPolicy pulumi.String

const (
	TrailingSeparatorPolicyNotSpecified = TrailingSeparatorPolicy("NotSpecified")
	TrailingSeparatorPolicyNotAllowed   = TrailingSeparatorPolicy("NotAllowed")
	TrailingSeparatorPolicyOptional     = TrailingSeparatorPolicy("Optional")
	TrailingSeparatorPolicyMandatory    = TrailingSeparatorPolicy("Mandatory")
)

func (TrailingSeparatorPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e TrailingSeparatorPolicy) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e TrailingSeparatorPolicy) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e TrailingSeparatorPolicy) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e TrailingSeparatorPolicy) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The usage indicator.
type UsageIndicator pulumi.String

const (
	UsageIndicatorNotSpecified = UsageIndicator("NotSpecified")
	UsageIndicatorTest         = UsageIndicator("Test")
	UsageIndicatorInformation  = UsageIndicator("Information")
	UsageIndicatorProduction   = UsageIndicator("Production")
)

func (UsageIndicator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e UsageIndicator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e UsageIndicator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e UsageIndicator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e UsageIndicator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The X12 character set.
type X12CharacterSet pulumi.String

const (
	X12CharacterSetNotSpecified = X12CharacterSet("NotSpecified")
	X12CharacterSetBasic        = X12CharacterSet("Basic")
	X12CharacterSetExtended     = X12CharacterSet("Extended")
	X12CharacterSetUTF8         = X12CharacterSet("UTF8")
)

func (X12CharacterSet) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e X12CharacterSet) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e X12CharacterSet) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e X12CharacterSet) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e X12CharacterSet) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The group header date format.
type X12DateFormat pulumi.String

const (
	X12DateFormatNotSpecified = X12DateFormat("NotSpecified")
	X12DateFormatCCYYMMDD     = X12DateFormat("CCYYMMDD")
	X12DateFormatYYMMDD       = X12DateFormat("YYMMDD")
)

func (X12DateFormat) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e X12DateFormat) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e X12DateFormat) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e X12DateFormat) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e X12DateFormat) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The group header time format.
type X12TimeFormat pulumi.String

const (
	X12TimeFormatNotSpecified = X12TimeFormat("NotSpecified")
	X12TimeFormatHHMM         = X12TimeFormat("HHMM")
	X12TimeFormatHHMMSS       = X12TimeFormat("HHMMSS")
	X12TimeFormatHHMMSSdd     = X12TimeFormat("HHMMSSdd")
	X12TimeFormatHHMMSSd      = X12TimeFormat("HHMMSSd")
)

func (X12TimeFormat) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e X12TimeFormat) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e X12TimeFormat) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e X12TimeFormat) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e X12TimeFormat) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}