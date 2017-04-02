<template>
  <div :style="{fontSize: fontSize , lineHeight: lineHeight}" class="auto-textarea-wrapper">
    <pre :style="{fontSize: fontSize , lineHeight: lineHeight}" class="auto-textarea-block"><br/>{{temp_value}}</pre>
    <textarea :placeholder="placeholder" v-model="temp_value"  :style="{fontSize: fontSize , lineHeight: lineHeight}" @change="change(temp_value)" :class="{'no-border': !border , 'no-resize': !resize}" class="auto-textarea-input">
      </textarea>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                temp_value: (() => {
                    return this.value
                })()
            };
        },
        created() {
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            border: {
                type: Boolean,
                default: false
            },
            resize: {
                type: Boolean,
                default: false
            },
            change: {
                type: Function,
                default: null
            },
            fontSize: {
                type: String,
                default: '14px'
            },
            lineHeight: {
                type: String,
                default: '18px'
            }
        },
        methods: {
        },
        watch: {
            value: function (val, oldVal) {
                this.temp_value = val
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .auto-textarea-wrapper
    position relative
    width 100%
    margin 0
    padding 0
    line-height normal
    .auto-textarea-block
      display block
      visibility hidden
      margin 0
      padding 0
      font-size 100%
    .auto-textarea-input
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      margin 0
      padding 0
      overflow-y hidden
      &.no-border
        outline 0 none
        border none !important
      &.no-resize
        resize none
</style>
